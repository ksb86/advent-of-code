const path = require('path');
const { getInput, validateAnswer } = require('../../helpers');

const lines = getInput(path.resolve(__dirname, './input'));

let trees = 0;
lines.forEach((line, lineIndex) => {
    const colIndex = (lineIndex*3)%31;
    if (line[colIndex] === '#') {
        trees++
    }
});

console.log(trees);

console.log(validateAnswer(156, trees));