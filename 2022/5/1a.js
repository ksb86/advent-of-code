const path = require('path');
const { getInput, validateAnswer, newLineString } = require('../../helpers');

const input = getInput(path.resolve(__dirname, './input.txt'));

console.log(input.length);
console.log(validateAnswer(1, input.length));