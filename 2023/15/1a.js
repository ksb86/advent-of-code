const path = require('path');
const { getInput, numArrayProduct, numArraySum, newLineString, validateAnswer, sortBy } = require('../../helpers');

let myOutput;
// ACTUAL
let input = getInput(path.resolve(__dirname, './input.txt'), {readAsString: true});
let expectedOutput = 521341; // ACTUAL

// EXAMPLE
// input = getInput(path.resolve(__dirname, './example.txt'), {readAsString: true});
// expectedOutput = 1320; // EXAMPLE

input = input.split(',');

function getValue(string) {
    return string.split('').reduce((acc, curr) => {
        acc = (((curr.charCodeAt(0) + acc)*17)%256);
        return acc;
    }, 0);
}
myOutput = input.reduce((acc, curr) => {
    return acc += getValue(curr);
}, 0);

console.log({myOutput});
console.log(validateAnswer(expectedOutput, myOutput));
