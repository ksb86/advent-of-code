const path = require('path');
const { getInput, numArrayProduct, numArraySum, newLineString, validateAnswer, sortBy } = require('../../helpers');

let myOutput;
// ACTUAL
let input = getInput(path.resolve(__dirname, './input.txt'));
let expectedOutput = 2600; // ACTUAL

// EXAMPLE
// input = getInput(path.resolve(__dirname, './example.txt'));
// expectedOutput = 8; // EXAMPLE

const cubes = {
    'r': 12,
    'g': 13,
    'b': 14,
};

const possibleGames = input.reduce((acc, game) => {
    let [id, games] = game.split(': ');
    [id] = id.match(/\d+/);
    const cubeCounts = games.match(/\d+\s\w/gi).map(g => g.split(' '));
    const impossible = cubeCounts.some(([count, color]) => {
        if (Number(count) > cubes[color]) {
            return true;
        } else {
            return false;
        }
    });

    if (!impossible) {
        acc.push(Number(id));
    }
    return acc;
}, []);

myOutput = numArraySum(possibleGames);

console.log({myOutput});
console.log(validateAnswer(expectedOutput, myOutput));
