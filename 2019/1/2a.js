const path = require('path');
const { getInput, validateAnswer } = require('../../helpers');

const input = getInput(path.resolve(__dirname, './input.txt')).map(Number);

function calculateFuel(weight) {
    const tempWeight = Math.floor(weight/3)-2;
    return tempWeight > 0 ? tempWeight : 0;
}
const total = input.reduce((acc, curr) => {
    let totalFuel = calculateFuel(curr);
    let additionalFuel = totalFuel;
    while (additionalFuel) {
        additionalFuel = calculateFuel(additionalFuel)
        totalFuel += additionalFuel;
    }
    return acc += totalFuel;
}, 0);

console.log({total});
console.log(validateAnswer(4983626, total));
