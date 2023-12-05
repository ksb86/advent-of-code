const path = require('path');
const { getInput, numArrayProduct, numArraySum, newLineString, validateAnswer, sortBy } = require('../../helpers');

let myOutput;
// ACTUAL
let [seeds, ...maps] = getInput(path.resolve(__dirname, './input.txt'), {splitTwoLines: true});
let expectedOutput = 379811651; // ACTUAL

// EXAMPLE
// [seeds, ...maps] = getInput(path.resolve(__dirname, './example.txt'), {splitTwoLines: true});
// expectedOutput = 35; // EXAMPLE

seeds = seeds.match(/\d+/gi).map(Number);
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

const groupRangeRules = maps.reduce((acc, curr) => {
    let [name, ranges] = curr.split('map:');
    name = name.trim();
    ranges = ranges.trim().split(/\n/gi);
    rules = buildGroupRangeRules(ranges);
    acc.push({name, rules});
    return acc;
}, []);

function convertNumber(number, {rules, name}) {
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
    for (const rules of groupRangeRules) {
        tempVal = convertNumber(tempVal, rules);
    }

    return tempVal;
}
const locations = seeds.map(seed => {
    return mapFunc(seed);
});
myOutput = Math.min(...locations);

console.log({myOutput});
console.log(validateAnswer(expectedOutput, myOutput));