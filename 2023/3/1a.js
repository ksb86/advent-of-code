const path = require('path');
const {
    getInput,
    numArrayProduct,
    numArraySum,
    newLineString,
    validateAnswer,
    sortBy,
} = require('../../helpers');

let myOutput;
// ACTUAL
let input = getInput(path.resolve(__dirname, './input.txt'));
let expectedOutput = 529618; // ACTUAL

// EXAMPLE
// input = getInput(path.resolve(__dirname, './example.txt'));
// expectedOutput = 4361; // EXAMPLE

const regex = /\d+/g;
const allNumbers = [];

input.forEach((line, rowIndex) => {
    // each line
    while ((match = regex.exec(line)) !== null) {
        // each number
        const number = match[0];
        const column = match.index;
        const prevRow = rowIndex === 0 ? null : input[rowIndex - 1];
        const nextRow = rowIndex === input.length - 1 ? null : input[rowIndex + 1];

        const left = line[column - 1] ?? '';
        const right = line[column + number.length] ?? '';
        const above = prevRow?.slice(column === 0 ? 0 : column - 1, column + number.length + 1) || '';
        const below = nextRow?.slice(column === 0 ? 0 : column - 1, column + number.length + 1) || '';

        if ([...left, ...right, ...above, ...below].some(char => char !== '.')) {
            allNumbers.push(number);
        }
    }
});

myOutput = numArraySum(allNumbers.map(Number));
console.log({ myOutput });
console.log(validateAnswer(expectedOutput, myOutput));