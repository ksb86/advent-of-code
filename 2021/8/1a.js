const path = require("path");
const { getInput, validateAnswer } = require("../../helpers");

let input = getInput(path.resolve(__dirname, "./input.txt"));

const total1478s = input.reduce((acc, line) => {
    const [ditch, output] = line.split(' | ');
    const outputDigits = output.split(' ');
    acc += outputDigits.filter(digit => digit.length === 7 || digit.length === 4 || digit.length === 3 || digit.length === 2).length

    return acc;
}, 0);

console.log({total1478s});
console.log(validateAnswer(247,total1478s));