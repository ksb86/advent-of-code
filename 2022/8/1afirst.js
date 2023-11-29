const path = require('path');
const { getInput, validateAnswer, newLineString } = require('../../helpers');

// const input = getInput(path.resolve(__dirname, './input.txt'));
const input = getInput(path.resolve(__dirname, './input.sample.txt'));

const treeLines = input.map(l => l.split('').map(Number));
const xVisible = treeLines.map(line => {
    const tallest = Math.max(...line);
    const f = line.indexOf(tallest);
    const leftChunk = line.slice(0, f+1);
    let leftTallestMarker = line[0];
    const left = leftChunk.reduce((acc, curr, i) => {
        if (i <= f && curr > leftTallestMarker) {
            acc.push(curr);
            leftTallestMarker = curr;
        }
        return acc
    }, [line[0]]);

    const l = line.lastIndexOf(tallest);
    const rightChunk = line.slice(l).reverse();
    let rightTallestMarker = line[line.length - 1];
    const right = rightChunk.reduce((acc, curr, i) => {
        if (i <= f && curr > rightTallestMarker) {
            acc.push(curr);
            rightTallestMarker = curr;
        }
        return acc;
    }, [line[line.length - 1]]).reverse();

    return [...left, ...right].join('');
});

let yArray = [];
yArray.length = treeLines[0].length;
treeLines.forEach((line, lineIndex) => {
    // const trees = line.split('');
    line.forEach((tree, treeIndex) => {
        yArray[treeIndex]?.length ? yArray[treeIndex].push(tree) : yArray[treeIndex] = [tree];
    });
}, []);
// yArray = yArray.map(l => l.replace('undefined', ''))
// console.log(yArray);

const yVisible = yArray.map(line => {
    const tallest = Math.max(...line);
    const f = line.indexOf(tallest);
    const leftChunk = line.slice(0, f+1);
    let leftTallestMarker = line[0];
    const left = leftChunk.reduce((acc, curr, i) => {
        if (i <= f && curr > leftTallestMarker) {
            acc.push(curr);
            leftTallestMarker = curr;
        }
        return acc
    }, [line[0]]);

    const l = line.lastIndexOf(tallest);
    const rightChunk = line.slice(l).reverse();
    let rightTallestMarker = line[line.length - 1];
    const right = rightChunk.reduce((acc, curr, i) => {
        if (i <= f && curr > rightTallestMarker) {
            acc.push(curr);
            rightTallestMarker = curr;
        }
        return acc;
    }, [line[line.length - 1]]).reverse();

    return [...left, ...right].join('');
});

// const yCount = yVisible.reduce((acc, curr) => {
//     return acc+= curr.length;
// }, 0);
// const xCount = xVisible.reduce((acc, curr) => {
//     return acc+= curr.length;
// }, 0);

// console.log(yVisible.length);
console.log(yVisible.slice(1, yVisible.length-1));
console.log(xVisible.slice(1, xVisible.length-1));
console.log(xVisible.length);
console.log(xVisible.slice(1, xVisible.length).join('').length + yVisible.slice(1, yVisible.length).join('').length + (98*4));
// console.log(yCount);
// console.log(xCount);
// console.log(xCount);
// console.log(yCount + xCount);
// console.log(validateAnswer(1, input.length));

// not 1435
// not 2868
// not 1827
// not 1612
// not 1784
// not 1831
// not 1439
// not 2205