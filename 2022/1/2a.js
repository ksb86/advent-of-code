const path = require('path');
const { getInput, validateAnswer, newLineString } = require('../../helpers');

const input = getInput(path.resolve(__dirname, './input.txt'), { splitTwoLines: true });

const groupSums = input.reduce((acc, curr) => {
    const sum = curr.split(newLineString).reduce((sumAcc, sumCurr) => {
        return sumAcc += Number(sumCurr)
    }, 0);
    acc.push(sum);

    return acc;
}, []).sort();
const last3 = groupSums[groupSums.length - 1] + groupSums[groupSums.length - 2] + groupSums[groupSums.length - 3];
console.log({last3});
console.log(validateAnswer(197301, last3));