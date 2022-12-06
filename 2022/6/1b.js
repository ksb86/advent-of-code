const path = require('path');
const { getInput, validateAnswer, newLineString } = require('../../helpers');

const input = getInput(path.resolve(__dirname, './input.txt'));
let count;
let candidate;

input[0].split('').forEach((l, i) => {
    candidate = input[0].slice(i, i+4);
    if ([...new Set(candidate.split(''))].length === 4 && !count) {
        count = i;
    }
});

// console.log(count+4);
console.log(validateAnswer(1757, count+4));