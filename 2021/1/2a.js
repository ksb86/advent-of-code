const path = require('path');
const { getInput, validateAnswer } = require('../helpers');

const input = getInput(path.resolve(__dirname, './input.txt'));
let numberOfIncreases = 0;
let prevSum;
input.forEach((d, i, arr) => {
    if (arr[i+2]) {
        const depth1 = Number(d);
        const depth2 = Number(arr[i+1]);
        const depth3 = Number(arr[i+2]);
        const sum = depth1 + depth2 + depth3;
        if (prevSum &&
            depth1 &&
            depth2 &&
            depth3 &&
            sum > prevSum) {
            numberOfIncreases++;
        }
        prevSum = sum;
    }
});
console.log(validateAnswer(1359, numberOfIncreases));
