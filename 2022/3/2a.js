const path = require('path');
const { getInput, validateAnswer, newLineString } = require('../../helpers');

const input = getInput(path.resolve(__dirname, './input.txt'));

function getPriority(letter) {
    if (!letter) return 0;
    // A = 65  -> 27 (MINUS 38)
    // Z = 90  -> 52 (MINUS 38)
    // a = 97  -> 1  (MINUS 96)
    // z = 122 -> 26 (MINUS 96)
    return letter.charCodeAt(0) - (letter.toLowerCase() === letter ? 96 : 38);
}
function deDupe(str) {
    return [...new Set(str.split(''))].join('');
}
function getCommonLetter(a, b, c) {
    return [a, b, c].reduce((a, b) => a.filter(c => b.includes(c)))[0];
}

const groups = [];
let group = [];
input.forEach((sack, i) => {
    group.push(deDupe(sack).split(''));
    if (i%3 === 2) {
        groups.push(group);
        group = [];
    }
});

const sum = groups.reduce((acc, [a, b, c]) => {
    const commonLetter = getCommonLetter(a, b, c);
    const priority = getPriority(commonLetter);
    return acc += priority;
}, 0);

console.log({sum});
console.log(validateAnswer(2548, sum));
// 2447 too low
// 2476 too low
// 2512 nope
// 2549 too high