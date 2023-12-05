const path = require('path');
const { getInput, numArrayProduct, numArraySum, newLineString, validateAnswer, sortBy } = require('../../helpers');

let myOutput;
// ACTUAL
let input = getInput(path.resolve(__dirname, './input.txt'));
let expectedOutput = 19135; // ACTUAL

// EXAMPLE
// input = getInput(path.resolve(__dirname, './example.txt'));
// expectedOutput = 13; // EXAMPLE

const numbers = input.map(card => {
    const [,numbers] = card.split(':');
    let [winningNumbers, myNumbers] = numbers.split('|');
    winningNumbers = winningNumbers.split(' ').map(n => n.trim()).filter(Boolean);
    myNumbers = myNumbers.split(' ').map(n => n.trim()).filter(Boolean);

    const myWinningNumbers = myNumbers.filter(m => {
        return winningNumbers.includes(m);
    });

    return myWinningNumbers;
});

myOutput = numbers.reduce((acc, curr) => {
    let num = curr.length ? 1 : 0;
    if (curr.length) {
        acc += Math.pow(2, curr.length-1);
    }

    return acc;
}, 0);

console.log({myOutput});
console.log(validateAnswer(expectedOutput, myOutput));