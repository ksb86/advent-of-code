const path = require("path");
const { getInput, validateAnswer } = require("../../helpers");

let input = getInput(path.resolve(__dirname, "./input.txt"))[0].split(',').map(n => Number(n));
let positions = [...Array(Math.max(...input)).keys()];

const costs = positions.map(p => {
    return input.reduce((acc, curr) => {
        acc += Math.abs(p - curr);
        return acc;
    }, 0);
});

const minCost = Math.min(...costs);

console.log({minCost});
console.log(validateAnswer(336120, minCost));