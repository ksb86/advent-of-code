const path = require('path');
const { getInput, validateAnswer, newLineString } = require('../../helpers');

// const input = getInput(path.resolve(__dirname, './input.txt'));
const input = getInput(path.resolve(__dirname, './input.sample.txt'));

const treeLines = input.map(l => l.split('').map(Number));

    // 3 0 3 7 3
    // 2 5 5 1 2
    // 6 5 3 3 2
    // 3 3 5 4 9
    // 3 5 3 9 0

function getTallTrees(line) {
    const first = line[0];
    const last = line[line.length-1];
    // const returnArr = [first];
    const max = Math.max(...line);
    const firstMaxIndex = line.indexOf(max);
    const lastMaxIndex = line.lastIndexOf(max);
    const hasOnlyOneMaxTree = firstMaxIndex === lastMaxIndex;
    const left = line.slice(0, firstMaxIndex+1);
    const right = line.slice(lastMaxIndex).reverse();

    const newLeft = [];
    let currentMaxLeft = first;
    left.forEach((tree, i) => {
        if (i === 0 || tree > currentMaxLeft) {
            newLeft.push(tree);
            currentMaxLeft = tree;
        }
    });
    // console.log({left});
    // console.log({newLeft})

    const newRight = [];
    let currentMaxRight = last;
    right.forEach((tree, i) => {
        if (i === 0 || tree > currentMaxRight) {
            newRight.push(tree);
            currentMaxRight = tree;
        }
    });
    if (hasOnlyOneMaxTree) {
        newRight.pop();
    }
    newRight.reverse();
    // console.log({right});
    // console.log({newRight})

    // returnArr.push(last);
    return [...newLeft, ...newRight];
}

const xVisible = treeLines.map((line, i) => {
    // NEED THIS
    if (i === 0 || i === treeLines.length-1) {
        // first and last tree lines are always visible
        return [];
    }

    return getTallTrees(line);
    // const firstTree = line[0];
    // const lastTree = line[line.length-1];
    // const visibleTrees = [firstTree];
    // const tallest = Math.max(...line);
    // const firstTallestIndex = line.indexOf(tallest);

    // line.forEach((tree, i) => {
    //     if (tree > firstTree && i <= firstTallestIndex) {
    //         visibleTrees.push(tree);
    //     }
    // });

    // const reversedLine = line.reverse();
    // const lastTallestIndex = reversedLine.indexOf(tallest);

    // line.reverse().forEach((tree, i) => {
    //     if (tree > lastTree && i <= lastTallestIndex) {
    //         visibleTrees.push(tree);
    //     }
    // });
    // visibleTrees.push(lastTree);
    // return visibleTrees;
    // const f = line.indexOf(tallest);
    // const leftChunk = line.slice(0, f+1);
    // let leftTallestMarker = line[0];
    // const left = leftChunk.reduce((acc, curr, i) => {
    //     if (i <= f && curr > leftTallestMarker) {
    //         acc.push(curr);
    //         leftTallestMarker = curr;
    //     }
    //     return acc
    // }, [line[0]]);

    // const l = line.lastIndexOf(tallest);
    // const rightChunk = line.slice(l).reverse();
    // let rightTallestMarker = line[line.length - 1];
    // const right = rightChunk.reduce((acc, curr, i) => {
    //     if (i <= f && curr > rightTallestMarker) {
    //         acc.push(curr);
    //         rightTallestMarker = curr;
    //     }
    //     return acc;
    // }, [line[line.length - 1]]).reverse();

    // return [...left, ...right].join('');
});
// console.log({xVisible});

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

const yVisible = yArray.map((line, i) => {
    // NEED THIS
    if (i === 0 || i === treeLines.length-1) {
        // first and last tree lines are always visible
        return [];
    }

    return getTallTrees(line);
});
// const yVisible = yArray.map(line => {
//     const tallest = Math.max(...line);
//     const f = line.indexOf(tallest);
//     const leftChunk = line.slice(0, f+1);
//     let leftTallestMarker = line[0];
//     const left = leftChunk.reduce((acc, curr, i) => {
//         if (i <= f && curr > leftTallestMarker) {
//             acc.push(curr);
//             leftTallestMarker = curr;
//         }
//         return acc
//     }, [line[0]]);

//     const l = line.lastIndexOf(tallest);
//     const rightChunk = line.slice(l).reverse();
//     let rightTallestMarker = line[line.length - 1];
//     const right = rightChunk.reduce((acc, curr, i) => {
//         if (i <= f && curr > rightTallestMarker) {
//             acc.push(curr);
//             rightTallestMarker = curr;
//         }
//         return acc;
//     }, [line[line.length - 1]]).reverse();

//     return [...left, ...right].join('');
// });

// const yCount = yVisible.reduce((acc, curr) => {
//     return acc+= curr.length;
// }, 0);
// const xCount = xVisible.reduce((acc, curr) => {
//     return acc+= curr.length;
// }, 0);

console.log(yVisible.join('').length);
console.log(xVisible.join('').length);
console.log(xVisible.join('').length + yVisible.join('').length - (treeLines.length*2));
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