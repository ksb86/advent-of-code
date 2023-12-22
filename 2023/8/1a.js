const path = require('path');
const { getInput, numArrayProduct, numArraySum, newLineString, validateAnswer, sortBy } = require('../../helpers');
const { dir } = require('console');

let myOutput;
// ACTUAL
let input = getInput(path.resolve(__dirname, './input.txt'), {splitTwoLines: true});
let expectedOutput = 16043; // ACTUAL

// EXAMPLE
// input = getInput(path.resolve(__dirname, './example.txt'), {splitTwoLines: true});
// expectedOutput = 6; // EXAMPLE

let [directions, nodes] = input;
nodes = nodes.split(/\n/gi);
const start = 'AAA';
const map = new Map();

nodes.forEach(node => {
    const [loc, L, R] = node.match(/\w+/gi);
    map.set(`${loc}L`, L);
    map.set(`${loc}R`, R);
});

let dest = start;
let index = 0;
myOutput = 0;
while (dest !== 'ZZZ') {
    dest = map.get(`${dest}${directions[index]}`);
    index = index === directions.length-1 ? 0 : index + 1;
    myOutput++;
}
console.log({dest, myOutput});

console.log({myOutput});
console.log(validateAnswer(expectedOutput, myOutput));
