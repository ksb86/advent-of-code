const path = require('path');
const { getInput, validateAnswer, newLineString } = require('../../helpers');

const plays = getInput(path.resolve(__dirname, './input.txt'));

const outComePointMap = {
    'X': 0,
    'Y': 3,
    'Z': 6,
};

const playShapeMap = {
    'AX': 'C',
    'AY': 'A',
    'AZ': 'B',
    'BX': 'A',
    'BY': 'B',
    'BZ': 'C',
    'CX': 'B',
    'CY': 'C',
    'CZ': 'A',
}

const shapePointMap = {
    'A': 1,
    'B': 2,
    'C': 3,
}

const totalPoints = plays.reduce((acc, curr) => {
    let [opp, outcome] = curr.split(' ');
    let shape = playShapeMap[`${opp}${outcome}`];
    const thisScore = outComePointMap[outcome] + shapePointMap[shape];
    acc += thisScore;

    return acc;
}, 0);

console.log({totalPoints});
console.log(validateAnswer(13433, totalPoints));