const fs = require('fs');

let list = fs.readFileSync('./input', {encoding: 'utf8'});

list = list.split('\r\n');

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