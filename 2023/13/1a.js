const path = require('path');
const { getInput, numArrayProduct, numArraySum, newLineString, validateAnswer, sortBy } = require('../../helpers');

let myOutput;
// ACTUAL
let input = getInput(path.resolve(__dirname, './input.txt'), { splitTwoLines: true });
let expectedOutput = 34993; // ACTUAL

// EXAMPLE
// input = getInput(path.resolve(__dirname, './example.txt'), { splitTwoLines: true });
// expectedOutput = 'tbd'; // EXAMPLE


function checkForSymmetry(start, groupRows) {
    let symmetrics = [];
    for (let i = 0; i < groupRows.length; i++ ) {
        if (groupRows[start-i] && groupRows[start+i+1]) {
            symmetrics.push(groupRows[start-i] === groupRows[start+i+1]);
        }
    }
    return symmetrics.every(Boolean) ? start + 1 : null;
}

function transpose(a) {
    return Object.keys(a[0]).map(function(c) {
        return a.map(function(r) { return r[c]; }).join('');
    });
}

const reflectedInput = [];
const rowResults = input.map(group => {
    const groupRows = group.split(/\n/gi);
    let marker;
    let reflection = [];
    groupRows.forEach((row, i) => {
        if (row === groupRows[i+1] && !marker) {
            marker = checkForSymmetry(i, groupRows);
        }
        reflection.push(row.split(''));
    });
    reflectedInput.push(transpose(reflection));
    return marker;
});

const colResults = reflectedInput.map((groupCols, gi) => {
    let marker;
    groupCols.forEach((col, i) => {
        if (col === groupCols[i+1] && !marker) {
            marker = checkForSymmetry(i, groupCols);
        }
    });
    return marker;
});
// console.table(rowResults.map((r, i) => {
//     return {
//         i,
//         r: r || '',
//         c: colResults[i] || ''
//     }
// }));

myOutput = numArraySum(colResults.filter(Boolean));
myOutput += (numArraySum(rowResults.filter(Boolean))*100);

console.log({myOutput});
console.log(validateAnswer(expectedOutput, myOutput));