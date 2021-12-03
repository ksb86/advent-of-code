const path = require('path');
const { getInput, validateAnswer } = require('../../helpers');

const lines = getInput(path.resolve(__dirname, './input'));
const rows = [...Array(128).keys()];
const cols = [...Array(8).keys()];

const makeSeatId = (lineRow, lineCol) => {
    return lineRow*8+lineCol;
};

const seatIds = lines.map(line => {
    // find row with first 7 letters
    const rowCode = line.substring(0, 7);
    const [lineRow] = rowCode.split('').reduce((acc, instruction) => {
        if (instruction === 'F') {
            return acc.slice(0, acc.length/2);
        } else {
            return acc.slice(acc.length/2);
        }
    }, rows);

    // find column with last 3 letters
    const colCode = line.substring(7);
    const [lineCol] = colCode.split('').reduce((acc, instruction) => {
        if (instruction === 'L') {
            return acc.slice(0, acc.length/2);
        } else {
            return acc.slice(acc.length/2);
        }
    }, cols);

    return makeSeatId(lineRow, lineCol);
});

const highestSeatId = Math.max(...seatIds);
console.log({highestSeatId});

console.log(validateAnswer(951, highestSeatId));
