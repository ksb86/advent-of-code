const fs = require('fs');

let list = fs.readFileSync('./input', {encoding: 'utf8'});

list = list.split('\r\n');

const multipliers = [];
list.forEach((first, firstIndex) => {
    for (var i = firstIndex + 1; i < list.length - i; i++) {
        const sum = Number(first) + Number(list[i]);
        if (sum === 2020 && multipliers.length < 2) {
            multipliers.push(Number(first));
            multipliers.push(Number(second));
            return;
        }
    }
});

console.log({multipliers});
const product = multipliers[0]*multipliers[1];
console.log({product});