const path = require('path');
const { getInput, numArrayProduct, numArraySum, newLineString, validateAnswer, sortBy } = require('../../helpers');

let myOutput;
// ACTUAL
let input = getInput(path.resolve(__dirname, './input.txt'), {readAsString: true});
let expectedOutput = 252782; // ACTUAL

// EXAMPLE
// input = getInput(path.resolve(__dirname, './example.txt'), {readAsString: true});
// expectedOutput = 145; // EXAMPLE

let boxes = Array(256);
input = input.split(',');

function getValue(string) {
    return string.split('').reduce((acc, curr) => {
        acc = (((curr.charCodeAt(0) + acc)*17)%256);
        return acc;
    }, 0);
}

input.forEach(command => {
    const remove = /-/gi.test(command);
    const [label, focal] = command.split(/=|-/gi);
    let boxIndex = getValue(label);
    if (remove) {
        const newValueRemoved = boxes[boxIndex]?.filter(lens => !lens.includes(label));
        boxes[boxIndex] = newValueRemoved;
    } else {
        if (!boxes[boxIndex]) {
            boxes[boxIndex] = [`${label}-${focal}`];
        } else if (!boxes[boxIndex].length || !boxes[boxIndex].find(lens => lens.includes(label))) {
            boxes[boxIndex].push(`${label}-${focal}`);
        } else {
            boxes[boxIndex] = boxes[boxIndex].map(lens => {
                if (lens.includes(label)) {
                    return `${label}-${focal}`;
                } else {
                    return lens;
                }
            });
        }
    }
});

function getFocusingPower(boxIndex, slotNumber, focal) {
    return (boxIndex+1)*slotNumber*focal;
}

boxes = boxes.map((box, boxIndex) => {
    if (!box || !box.length) {
        return 0;
    } else {
        return numArraySum(box.map((lens, lensIndex) => {
            const [focal] = lens.match(/\d+/gi);
            return getFocusingPower(boxIndex, lensIndex + 1, focal)
        }))
    }
}).filter(Boolean);

myOutput = numArraySum(boxes);
console.log({myOutput});
console.log(validateAnswer(expectedOutput, myOutput));
