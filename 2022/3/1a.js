const path = require('path');
const { getInput, validateAnswer, newLineString } = require('../../helpers');

const input = getInput(path.resolve(__dirname, './input.txt'));

function getPriority(letter) {
    // A = 65  -> 27 (MINUS 38)
    // Z = 90  -> 52 (MINUS 38)
    // a = 97  -> 1  (MINUS 96)
    // z = 122 -> 26 (MINUS 96)
    return letter.charCodeAt(0) - (letter.toLowerCase() === letter ? 96 : 38);
}

function getCommonLetter(a, b) {
    return a.find(aLetter => b.includes(aLetter));
}

const sum = input.reduce((acc, curr) => {
    const a = [...new Set(curr.substr(-curr.length, curr.length/2).split(''))];
    const b = [...new Set(curr.substr(curr.length/2).split(''))];
    const commonLetter = getCommonLetter(a, b);
    const priority = getPriority(commonLetter);
    return acc += priority;
}, 0);

console.log({sum});
console.log(validateAnswer(7903, sum));