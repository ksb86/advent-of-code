const path = require('path');
const { getInput, numArrayProduct, numArraySum, newLineString, validateAnswer, sortBy } = require('../../helpers');

let myOutput;
// ACTUAL
let input = getInput(path.resolve(__dirname, './input.txt'));
let expectedOutput = 'tbd'; // ACTUAL

// EXAMPLE
input = getInput(path.resolve(__dirname, './example.txt'));
expectedOutput = 'tbd'; // EXAMPLE


// code here


console.log({myOutput});
console.log(validateAnswer(expectedOutput, myOutput));
