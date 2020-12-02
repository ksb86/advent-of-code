const fs = require('fs');

let list = fs.readFileSync('./input', {encoding: 'utf8'});

list = list.split('\r\n');

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