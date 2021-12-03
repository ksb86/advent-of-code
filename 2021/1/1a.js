const path = require('path');
const { getInput, validateAnswer } = require('../helpers');

const input = getInput(path.resolve(__dirname, './input.txt'));
let numberOfIncreases = 0;

input.forEach((d, i, arr) => {
    const depth = Number(d);
    if (i !== 0 && depth && depth > arr[i - 1]) {
        numberOfIncreases++;
    }
});
console.log(validateAnswer(1393, numberOfIncreases));
