const path = require('path');
const { getInput, numArrayProduct, numArraySum, newLineString, validateAnswer, sortBy } = require('../../helpers');

let myOutput;
// ACTUAL
let input = getInput(path.resolve(__dirname, './input.txt'));
let expectedOutput = 4568778; // ACTUAL

// EXAMPLE
// input = getInput(path.resolve(__dirname, './example.txt'));
// expectedOutput = 288; // EXAMPLE

const times = input[0].match(/\d+/gi);
const records = input[1].match(/\d+/gi);

const races = times.map((time, i) => {
    return {
        time,
        record: records[i],
    }
});

function findBestTime({time, record}) {
    let distance = record;
    let waysToWin = 0;
    for (let index = 0; index < time; index++) {

        distance = index * (time - index);
        if(distance > record) {
            waysToWin++
        }
    }
    return waysToWin;
}

myOutput = races.map(race => {
    return findBestTime(race);
});
myOutput = numArrayProduct(myOutput);
console.log({myOutput});
console.log(validateAnswer(expectedOutput, myOutput));