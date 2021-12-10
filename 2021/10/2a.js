const path = require("path");
const { getInput, validateAnswer } = require("../../helpers");

// let input = getInput(path.resolve(__dirname, "./sample.txt")).map(line => line.split(''));
let input = getInput(path.resolve(__dirname, "./input.txt")).map(line => line.split(''));

const closerChars = [')',']','}','>'];
const pairs = {
    '(': ')',
    '[': ']',
    '{': '}',
    '<': '>',
};
const getLineDetails = (line, lineNumber) => {
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
    return {
        invalidChar,
        neededClosers,
    };
}

const lineTotals = input.map(getLineDetails).filter(line => !line.invalidChar).map(({neededClosers}) => {
    return neededClosers.split('').reverse().reduce((itemAcc, char) => {
        let newScore = itemAcc*5;
        return itemAcc = newScore + closerChars.indexOf(char) + 1;
    }, 0);
}).sort((a, b) => a - b);

const middleScore = lineTotals[Math.floor(lineTotals.length/2)];
console.log({middleScore});
console.log(validateAnswer(3490802734, middleScore))