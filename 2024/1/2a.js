const path = require('path');
const { getInput, numArrayProduct, numArraySum, newLineString, validateAnswer, sortBy } = require('../../helpers');

let myOutput;
// ACTUAL
let input = getInput(path.resolve(__dirname, './input.txt'));
let expectedOutput = 24316233; // ACTUAL

// EXAMPLE
// input = getInput(path.resolve(__dirname, './example.txt'));
// expectedOutput = 31; // EXAMPLE

const {left, right} = input.reduce((acc, curr) => {
    const [l, r] = curr.split(/\s+/);
    acc.left.push(Number(l));
    acc.right += `${r}.`;
    return acc;
}, {left: [], right: ''});
let similarityScore = 0;
left.forEach(l => {
    const occurrences = right.match(new RegExp(`${l}`, 'g'))?.length || 0;
    const thisScore = l * occurrences;
    similarityScore += thisScore;
});

myOutput = similarityScore;
console.log({myOutput});
console.log(validateAnswer(expectedOutput, myOutput));
