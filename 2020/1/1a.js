const path = require('path');
const { getInput, validateAnswer } = require('../../helpers');

const list = getInput(path.resolve(__dirname, './input'));

const multipliers = [];
list.forEach(first => {
    list.forEach(second => {
        const sum = Number(first) + Number(second);
        if (sum === 2020 && multipliers.length < 2) {
            multipliers.push(Number(first));
            multipliers.push(Number(second));
            return;
        }
    });
});
console.log({multipliers});
const product = multipliers[0]*multipliers[1];
console.log({product});

console.log(validateAnswer(1019571, product));