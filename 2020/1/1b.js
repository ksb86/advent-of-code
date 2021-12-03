const fs = require('fs');

let list = fs.readFileSync('./input', {encoding: 'utf8'});

list = list.split('\r\n').map(item => Number(item));

const possibleAddends = list.map(item => {
    return 2020 - item;
});

const foundAddend = possibleAddends.find((item) => {
    return list.includes(item);
});

const addends = [foundAddend, 2020-foundAddend];
console.log({addends});
console.log({answer: addends[0]*addends[1]});