const path = require('path');
const { getInput, numArrayProduct, validateAnswer } = require('../../helpers');

const lines = getInput(path.resolve(__dirname, './input'));
const slopes = [
    {r:1,d:1},
    {r:3,d:1},
    {r:5,d:1},
    {r:7,d:1},
    {r:1,d:2},
];
const treesPerSlope = slopes.map(slope => {
    let treesThisSlope = 0;
    lines.forEach((line, loopIndex) => {
        const colIndex = (loopIndex*slope.r)%31;
        const lineIndex = loopIndex*slope.d;
        if (lines[lineIndex] && lines[lineIndex][colIndex] === '#') {
            treesThisSlope++
        }
    });
    return treesThisSlope;
});

console.log({treesPerSlope});
const answer = numArrayProduct(treesPerSlope)
console.log('treesPerSlopes product: ', answer);
console.log(validateAnswer(3898725600, answer));
