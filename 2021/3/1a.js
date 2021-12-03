const path = require("path");
const { getInput, validateAnswer } = require("../helpers");

const input = getInput(path.resolve(__dirname, "./input.txt"));
const counts = [0,0,0,0,0,0,0,0,0,0,0,0];
input.forEach(row => {
    row.split('').forEach((bit, i) => {
        counts[i] += Number(bit);
    });
}, []);

const result = counts.map(count => {
    return count > (input.length/2) ? 1 : 0;
});

const gamma = parseInt(result.join(''), 2);
const epsilon = parseInt(result.map(r => r === 0 ? 1 : 0).join(''), 2);

console.log(validateAnswer(3912944, gamma*epsilon));
