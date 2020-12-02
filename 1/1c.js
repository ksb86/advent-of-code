const fs = require('fs');

let list = fs.readFileSync('./input', {encoding: 'utf8'});

list = list.split('\r\n').map(item => Number(item));

let rand1;
let rand2;
let sum;
let attempts = 0;
while (sum !== 2020) {
    attempts++;
    const i1 = Math.floor(Math.random()*list.length);
    const i2 = Math.floor(Math.random()*list.length);
    const i3 = Math.floor(Math.random()*list.length);
    rand1 = list[i1];
    rand2 = list[i2];
    rand3 = list[i3];
    sum = rand1 + rand2 + rand3;
}


console.log({attempts});
console.log({rand1});
console.log({rand2});
console.log({rand3});
console.log({sum});
console.log({product: rand1*rand2*rand3});
