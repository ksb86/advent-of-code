const path = require("path");
const { getInput, validateAnswer } = require("../../helpers");

let input = getInput(path.resolve(__dirname, "./input.txt"))[0].split(',').map(n => Number(n));
let positions = [...Array(Math.max(...input)).keys()];

const costs = positions.map(p => {
    return input.reduce((acc, curr) => {
        let distanceSum = 0;
        for (let step = 1; step <= Math.abs(curr - p); step++) {
            distanceSum += step;
        }
        acc += distanceSum;
        return acc;
    }, 0);
});

const minCost = Math.min(...costs);

console.log({minCost});
console.log(validateAnswer(96864235, minCost));