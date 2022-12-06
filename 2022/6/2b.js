const path = require('path');
const { getInput, validateAnswer, newLineString } = require('../../helpers');

const input = getInput(path.resolve(__dirname, './input.txt'));
let count;
let candidate;

input[0].split('').forEach((l, i) => {
    candidate = input[0].slice(i, i+14);
    if ([...new Set(candidate.split(''))].length === 14 && !count) {
        count = i;
    }
});

// console.log(count+14);
console.log(validateAnswer(2950, count+14));