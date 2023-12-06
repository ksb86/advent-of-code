const path = require('path');
const { getInput, numArrayProduct, numArraySum, newLineString, validateAnswer, sortBy } = require('../../helpers');

let myOutput;
// ACTUAL
let input = getInput(path.resolve(__dirname, './input.txt'));
let expectedOutput = 28973936; // ACTUAL

// EXAMPLE
// input = getInput(path.resolve(__dirname, './example.txt'));
// expectedOutput = 71503; // EXAMPLE

const time = input[0].replace(/[^0-9]/gi, '');
const record = input[1].replace(/[^0-9]/gi, '');

function findBestTime({time, record}) {
    let distance = record;
    let waysToWin = 0;
    for (let index = 0; index < time; index++) {

        distance = index * (time - index);
        if(distance > record) {
            waysToWin++;
        }
    }
    return waysToWin;
}

myOutput = findBestTime({ time, record });
console.log({myOutput});
console.log(validateAnswer(expectedOutput, myOutput));