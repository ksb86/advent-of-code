const path = require('path');
const { getInput, numArrayProduct, numArraySum, newLineString, validateAnswer, sortBy } = require('../../helpers');

let myOutput;
// ACTUAL
let input = getInput(path.resolve(__dirname, './input.txt'));
let expectedOutput = 86036; // ACTUAL

// EXAMPLE
// input = getInput(path.resolve(__dirname, './example.txt'));
// expectedOutput = 2286; // EXAMPLE

const gamePowers = input.map(game => {
    let [id, games] = game.split(': ');
    [id] = id.match(/\d+/);
    const cubeCounts = games.match(/\d+\s\w/gi).map(g => g.split(' '));

    const maxes = cubeCounts.reduce((acc, [count, color]) => {
        if (Number(count) > acc[color]) {
            acc[color] = Number(count);
        }

        return acc;
    }, { g: 0, r: 0, b: 0});

    return numArrayProduct(Object.values(maxes));
});

myOutput = numArraySum(gamePowers);

console.log({myOutput});
console.log(validateAnswer(expectedOutput, myOutput));
