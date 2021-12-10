const path = require("path");
const { getInput, validateAnswer } = require("../../helpers");

// let input = getInput(path.resolve(__dirname, "./sample.txt")).map(line => line.split(''));
let input = getInput(path.resolve(__dirname, "./input.txt")).map(line => line.split(''));

const closerChars = [')',']','}','>'];
const charScores = {
    ')': 3,
    ']': 57,
    '}': 1197,
    '>': 25137,
}
const pairs = {
    '(': ')',
    '[': ']',
    '{': '}',
    '<': '>',
};
const getLineScore = (line, lineNumber) => {
    let invalidChar;
    let neededClosers = '';
    line.forEach((currentChar, charNumber) => {
        if (!invalidChar) {
            if (closerChars.includes(currentChar)) {
                if (currentChar !== neededClosers[neededClosers.length - 1]) {
                    invalidChar = currentChar;
                } else {
                    neededClosers = neededClosers.slice(0, neededClosers.length - 1);
                }
            } else {
                neededClosers = `${neededClosers}${pairs[currentChar]}`;
            }
        }
    });
    return charScores[invalidChar] || 0;
}
const lineScores = input.map(getLineScore);
const totalScore = lineScores.reduce((score, curr) => score+=curr, 0);

console.log({totalScore});
console.log(validateAnswer(294195, totalScore))