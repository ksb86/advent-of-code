const path = require('path');
const { getInput, numArrayProduct, numArraySum, newLineString, validateAnswer, sortBy } = require('../../helpers');
let myOutput;
// ACTUAL
let input = getInput(path.resolve(__dirname, './input.txt'));
let expectedOutput = 108759; // ACTUAL

// EXAMPLE
// input = getInput(path.resolve(__dirname, './example.txt'));
// expectedOutput = 'tbd'; // EXAMPLE

function transpose(a) {
    return Object.keys(a[0]).map(function(c) {
        return a.map(function(r) { return r[c]; }).join('');
    });
}

let columns = transpose(input);
columns = columns.map(col => {
    let parts = col.split('#');
    parts = parts.map(part => {
        return [...part].sort().reverse().join('');
    });
    return parts.join('#');
});

let rows = transpose(columns);
myOutput = numArraySum(rows.map((row, rowIndex) => {
    return (rows.length - rowIndex)*(row.match(/O/gi)?.length);
}).filter(Boolean));

console.log({myOutput});
console.log(validateAnswer(expectedOutput, myOutput));
