const path = require('path');
const { getInput, validateAnswer } = require('../../helpers');

const input = getInput(path.resolve(__dirname, './input.txt')).map(Number);

const total = input.reduce((acc, curr) => {
    const temp = Math.floor(curr/3)-2
    return acc += temp;
}, 0);

console.log({total});
console.log(validateAnswer(3324332, total));
