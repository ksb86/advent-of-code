const path = require('path');
const { getInput, validateAnswer } = require('../../helpers');

const list = getInput(path.resolve(__dirname, './input'));

const multipliers = [];
list.forEach(first => {
    list.forEach(second => {
        list.forEach(third => {
            const sum = Number(first) + Number(second) + Number(third);
            if (sum === 2020 && multipliers.length < 3) {
                multipliers.push(Number(first));
                multipliers.push(Number(second));
                multipliers.push(Number(third));
                return;
            }
        });
    });
});
console.log({multipliers});
const product = multipliers[0]*multipliers[1]*multipliers[2];
console.log({product});

console.log(validateAnswer(59885340, product));