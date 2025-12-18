const path = require('path');
const { getInput, numArrayProduct, numArraySum, newLineString, validateAnswer, sortBy } = require('../../helpers');

let myOutput;
// ACTUAL
let input = getInput(path.resolve(__dirname, './input.txt'));
let expectedOutput = 1135; // ACTUAL

// EXAMPLE
// input = getInput(path.resolve(__dirname, './example.txt'));
// expectedOutput = 3; // EXAMPLE

console.log({input});
let current = 50;
let zeroCount = 0;
input.forEach(line => {
    const [dir, ...rest] = line;
    const amount = parseInt(rest.join(''));

    for (let i = 0; i < amount; i++) {
        if (dir === 'L') {
            current--;
            if (current < 0) {
                current = 99;
            }
        } else if (dir === 'R') {
            current++;
            if (current > 99) {
                current = 0;
            }
        }
    }
    if (current === 0) {
        zeroCount++;
    }
});

myOutput = zeroCount;

console.log({myOutput});
console.log(validateAnswer(expectedOutput, myOutput));
