const path = require('path');
const deep = require('deep-get-set');
const { getInput, validateAnswer, newLineString } = require('../../helpers');

const [l1, ...lines] = getInput(path.resolve(__dirname, './input.txt'));

const dirObj = {};
let marker = [];
lines.forEach(line => {
    if (line.startsWith('dir')) {
        const [, newDir] = line.split(' ');
        if (marker.length) {
            deep(dirObj, [...marker, newDir], {});
        } else {
            deep(dirObj, newDir, {});
        }

    } else if (line.startsWith('$ cd')) {
        const [,,cdDir] = line.split(' ');
        if (cdDir === '..') {
            marker.pop();
        } else {
            marker.push(cdDir);
        }
    } else if (line.startsWith('$ ls')) {
        // skip ls
    } else {
        let [size, fileName] = line.split(' ');
        fileName = fileName.replace('.', '|');
        if (marker.length) {
            deep(dirObj, [...marker, fileName], Number(size));
        } else {
            deep(dirObj, fileName, Number(size));
        }
    }
});

function toArray(obj) {
    const result = [];
    for (const prop in obj) {
        const value = obj[prop];
        if (typeof value === 'object') {
            result.push(toArray(value)); // <- recursive call
        }
        else {
            result.push(`${prop}${value}`);
        }
    }
    return result;
}
console.log(toArray(dirObj));

// console.log(dirObj);
// console.log(JSON.stringify(dirObj).length);
console.log(validateAnswer(1, lines.length));