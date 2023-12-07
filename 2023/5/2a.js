const path = require('path');
const { getInput, numArrayProduct, numArraySum, newLineString, validateAnswer, sortBy } = require('../../helpers');
console.time('p2');
let myOutput;
// ACTUAL
let [seeds, ...maps] = getInput(path.resolve(__dirname, './input.txt'), {splitTwoLines: true});
let expectedOutput = 27992443; // ACTUAL

// EXAMPLE
// [seeds, ...maps] = getInput(path.resolve(__dirname, './example.txt'), {splitTwoLines: true});
// expectedOutput = 46; // EXAMPLE

seeds = seeds.match(/\d+/gi).map(Number);

// fix seeds part 2
const seedRanges = seeds.reduce((acc, curr, index) => {
    if (index%2 === 0) {
        acc.push({
            first: Number(curr),
            last: Number((curr + seeds[index+1]) - 1),
        });
    }
    return acc;
}, []);

function buildGroupRangeRules(ranges) {
    return ranges.map(range => {
        const matches = range.match(/\d+/gi);
        let [destination, source, length] = matches.map(Number);
        return {
            min: source,
            max: source + (length - 1),
            offset: source - destination,
        };
    });
}

const mapRanges = maps.reduce((acc, curr) => {
    let [name, ranges] = curr.split('map:');
    ranges = ranges.trim().split(/\n/gi);
    rules = buildGroupRangeRules(ranges);
    acc.push(rules);
    return acc;
}, []);

function convertNumber(number, rules) {
    let returnNumber = number;
    let numberMapped = false;
    rules.forEach(({min, max, offset}) => {
        if (!numberMapped && returnNumber >= min && returnNumber <= max ) {
            numberMapped = true;
            returnNumber = returnNumber - offset;
        }
    });
    return returnNumber;
}

function mapFunc(seed) {

    let tempVal = seed;
    for (const rules of mapRanges) {
        tempVal = convertNumber(tempVal, rules);
    }

    return tempVal;
}

let minimum;
seedRanges.forEach(({first, last}, i) => {
    console.log('starting seedrange: ', i);
    console.timeLog("p2");
    let tracker = first;
    let temp;
    while (tracker <= last) {
        temp = mapFunc(tracker);
        if (!minimum) {
            minimum = temp;
        } else if (temp < minimum) {
            console.log('found minimum: ', temp);
            console.timeLog("p2");
            minimum = temp;
        }
        tracker++;
    }
});
myOutput = minimum;
console.log({myOutput});
console.log(validateAnswer(expectedOutput, myOutput));
console.timeEnd('p2');

// this takes too long (10-15 minutes), there's a better way...