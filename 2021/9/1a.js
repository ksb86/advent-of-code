const path = require("path");
const { getInput, validateAnswer } = require("../../helpers");
let input = getInput(path.resolve(__dirname, "./input.txt"));
input = input.map(row => row.split(''));

const lowPoints = [];
input.forEach((row, iR) => {
    row.forEach((number, iC) => {
        if (number < (input?.[iR - 1]?.[iC-1] || 9)
            && number < (input?.[iR - 1]?.[iC] || 9)
            && number < (input?.[iR - 1]?.[iC+1] || 9)
            && number < (row?.[iC-1] || 9)
            && number < (row?.[iC+1] || 9)
            && number < (input?.[iR + 1]?.[iC-1] || 9)
            && number < (input?.[iR + 1]?.[iC] || 9)
            && number < (input?.[iR + 1]?.[iC+1] || 9)) {
            lowPoints.push(number);
        }
    });
});

const result = lowPoints.reduce((acc, curr) => {
    return acc += Number(curr) + 1;
}, 0);

console.log({result});
console.log(validateAnswer(518, result));