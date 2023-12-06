const path = require('path');
const { getInput, numArrayProduct, numArraySum, newLineString, validateAnswer, sortBy } = require('../../helpers');

let myOutput = 0;
// ACTUAL
let input = getInput(path.resolve(__dirname, './input.txt'));
let expectedOutput = 5704953; // ACTUAL

// EXAMPLE
// input = getInput(path.resolve(__dirname, './example.txt'));
// expectedOutput = 30; // EXAMPLE

function processCard(card, index) {
    myOutput++;
    const [left, right] = card.split('|');
    const [,...winningNumbers] = left.match(/\d+/gi);
    const myNumbers = right.match(/\d+/gi);

    const winningCount = myNumbers.filter(m => {
        return winningNumbers.includes(m);
    }).length;

    for(var i = 0; i < winningCount; i++) {
        processCard(input[index+i+1], index+i+1);
    }
}
input.forEach(processCard);

console.log({myOutput});
console.log(validateAnswer(expectedOutput, myOutput));
