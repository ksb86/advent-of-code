const path = require('path');
const { getInput, validateAnswer } = require('../../helpers');

const input = getInput(path.resolve(__dirname, './input.txt'))[0].split(',').map(Number);

const add = (a, b) => a+b;
const mult = (a, b) => a*b;

for (let i = 0; i < input.length; i++) {
    if (input[i] === 99) {
        continue;
    } else if (i%4 === 0) {
        let value
        if (input[i] === 1) {
            value = add(input[input[i+1]], input[input[i+2]]);
        } else if (input[i] === 2) {
            value = mult(input[input[i+1]], input[input[i+2]]);
        }
        input[input[i+3]] = value;
    }
}

console.log(input[0]);
console.log(validateAnswer(3850704, input[0]));
