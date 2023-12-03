const path = require('path');
const {
    getInput,
    numArrayProduct,
    numArraySum,
    newLineString,
    validateAnswer,
    sortBy,
} = require('../../helpers');

let myOutput;
// ACTUAL
let input = getInput(path.resolve(__dirname, './input.txt'));
let expectedOutput = 77509019; // ACTUAL

// EXAMPLE
// input = getInput(path.resolve(__dirname, './example.txt'));
// expectedOutput = 467835; // EXAMPLE

const numRegex = /\d+/g;
const starRegex = /\*/g;
const allNumbers = [];

input.forEach((line, rowIndex) => {
    // each line
    while ((match = numRegex.exec(line)) !== null) {
        // each number
        const number = match[0];
        const numColumn = match.index;
        const prevRow = rowIndex === 0 ? null : input[rowIndex - 1];
        const nextRow = rowIndex === input.length - 1 ? null : input[rowIndex + 1];
        const adjacentStarCoords = [];
        // left
        const left = line[numColumn - 1];
        if (left === '*')
            adjacentStarCoords.push(`${rowIndex}, ${numColumn - 1}`)

        // right
        const right = line[numColumn + number.length];
        if (right === '*')
            adjacentStarCoords.push(`${rowIndex}, ${numColumn + number.length}`);

        // above
        const adjustedAboveNumColStart = numColumn === 0 ? 0 : numColumn - 1;
        const above = prevRow?.slice(adjustedAboveNumColStart, adjustedAboveNumColStart + number.length + (adjustedAboveNumColStart === numColumn ? 1 : 2)) || '';
        while ((starMatch = starRegex.exec(above)) !== null) {
            const starColumnAbove = starMatch.index + adjustedAboveNumColStart;
            adjacentStarCoords.push(`${rowIndex - 1}, ${starColumnAbove}`);
        }
        // below
        const adjustedBelowNumColStart = numColumn === 0 ? 0 : numColumn - 1;
        const below = nextRow?.slice(adjustedBelowNumColStart, adjustedBelowNumColStart + number.length + (adjustedBelowNumColStart === numColumn ? 1 : 2)) || '';
        while ((starMatch = starRegex.exec(below)) !== null) {
            const starColumnBelow = starMatch.index + adjustedBelowNumColStart;
            adjacentStarCoords.push(`${rowIndex + 1}, ${starColumnBelow}`);
        }

        allNumbers.push({
            number,
            adjacentStarCoords: adjacentStarCoords.toString(),
        });
    }
});
const starSharingNumbersMap = allNumbers.reduce((acc, curr) => {
    if (curr.adjacentStarCoords && !acc[curr.adjacentStarCoords]) {
        acc[curr.adjacentStarCoords] = [Number(curr.number)]
    } else if (curr.adjacentStarCoords && acc[curr.adjacentStarCoords].length === 1) {
        acc[curr.adjacentStarCoords].push(Number(curr.number));
    }
    return acc;
}, {});

const resultsWith2Values = Object.values(starSharingNumbersMap).filter(arr => arr.length === 2);
myOutput = numArraySum(resultsWith2Values.map(numArrayProduct));

console.log({ myOutput });
console.log(validateAnswer(expectedOutput, myOutput));
