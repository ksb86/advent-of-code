const path = require('path');
const { getInput, validateAnswer, newLineString } = require('../../helpers');

const input = getInput(path.resolve(__dirname, './input.txt'));
const marker = [];
let count;
input[0].split('').forEach((letter, i) => {
    if (marker.length === 14) {
        marker.shift();
    }
    marker.push(letter);

    if ([...new Set(marker)].length === 14 && !count) {
        count = i;
    }
});

// console.log(count+1);
console.log(validateAnswer(2950, count+1));