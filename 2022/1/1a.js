const path = require('path');
const { getInput, validateAnswer, newLineString } = require('../../helpers');

const input = getInput(path.resolve(__dirname, './input.txt'), { splitTwoLines: true });

const groupSums = input.reduce((acc, curr) => {
    const sum = curr.split(newLineString).reduce((sumAcc, sumCurr) => {
        return sumAcc += Number(sumCurr)
    }, 0);
    acc.push(sum);

    return acc;
}, []);

console.log(validateAnswer(66487, Math.max(...groupSums)));