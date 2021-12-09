const path = require("path");
const { getInput, validateAnswer } = require("../../helpers");

let input = getInput(path.resolve(__dirname, "./input.txt"));
input = input.map((row) => row.split("").map(Number));

const lowPointCoords = [];
input.forEach((row, iR) => {
    row.forEach((number, iC) => {
        if (number < (input?.[iR - 1]?.[iC-1] || 9)
            && number < (input?.[iR - 1]?.[iC] || 9)
            && number < (input?.[iR - 1]?.[iC+1] || 9)
            && number < (row?.[iC-1] || 9)
            && number < (row?.[iC+1] || 9)
            && number < (input?.[iR + 1]?.[iC-1] || 9)
            && number < (input?.[iR + 1]?.[iC] || 9)
            && number < (input?.[iR + 1]?.[iC+1] || 9)) {
            lowPointCoords.push([iR, iC]);
        }
    });
});

const getAdjacentCoords = (iR, iC) => {
    return [
        [iR - 1, iC],
        [iR + 1, iC],
        [iR, iC - 1],
        [iR, iC + 1],
    ];
}

const getBasinSize = (iR, iC, hasBeenFound) => {
    let count = 1;
    const adjacentCoords = getAdjacentCoords(iR, iC);

    for (const [r, c] of adjacentCoords) {
        if (!hasBeenFound[r]) {
            hasBeenFound[r] = {};
        } else if (hasBeenFound[r][c]) {
            continue;
        }
        hasBeenFound[r][c] = true;

        if (input[r] === undefined || input[r][c] === undefined) {
            continue;
        } else if (input[r][c] < 9) {
            count += getBasinSize(r, c, hasBeenFound)
        };
    }
    return count;
}

const getLargestBasinCalculation = () => {
    const allBasins = lowPointCoords.map(([iR, iC]) => {
        return getBasinSize(iR, iC, {
            [iR]: {
                [iC]: true
            }
        });
    }).sort((a, b) => b - a);

    return allBasins[0] * allBasins[1] * allBasins[2];
}

const result = getLargestBasinCalculation();
console.log({result});
console.log(validateAnswer(949905, result))