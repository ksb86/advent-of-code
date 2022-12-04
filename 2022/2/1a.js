const path = require('path');
const { getInput, validateAnswer, newLineString } = require('../../helpers');

const plays = getInput(path.resolve(__dirname, './input.txt'));

const shapePointMap = {
    'X': 1,
    'Y': 2,
    'Z': 3,
};

const playPointMap = {
    'AX': 3,
    'AY': 6,
    'AZ': 0,
    'BX': 0,
    'BY': 3,
    'BZ': 6,
    'CX': 6,
    'CY': 0,
    'CZ': 3,
}

const totalPoints = plays.reduce((acc, curr) => {
    let [opp, me] = curr.split(' ');

    const thisScore = shapePointMap[me] + playPointMap[`${opp}${me}`];
    acc += thisScore;

    return acc;
}, 0);

console.log({totalPoints});
console.log(validateAnswer(13484, totalPoints));
// not 13940 (too high)
// not 13364 (too low)
// not 11876 (too low)