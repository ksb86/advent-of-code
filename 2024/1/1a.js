const path = require('path');
const { getInput, numArrayProduct, numArraySum, newLineString, validateAnswer, sortBy } = require('../../helpers');

let myOutput;
// ACTUAL
let input = getInput(path.resolve(__dirname, './input.txt'));
let expectedOutput = 1666427; // ACTUAL

// EXAMPLE
// input = getInput(path.resolve(__dirname, './example.txt'));
// expectedOutput = 11; // EXAMPLE

const {left, right} = input.reduce((acc, curr) => {
    const [l, r] = curr.split(/\s+/);
    acc.left.push(Number(l));
    acc.right.push(Number(r));
    return acc;
}, {left: [], right: []});
left.sort();
right.sort();
const diffs = [];
left.forEach((l, i) => {
    diffs.push(Math.abs(right[i] - l));
});

myOutput = numArraySum(diffs);
console.log({myOutput});
console.log(validateAnswer(expectedOutput, myOutput));
