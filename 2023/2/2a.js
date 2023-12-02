const path = require('path');
const { getInput, numArrayProduct, numArraySum, newLineString, validateAnswer, sortBy } = require('../../helpers');

// const input = getInput(path.resolve(__dirname, './input copy.txt'));
const input = getInput(path.resolve(__dirname, './input.txt'));

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

console.log(numArraySum(gamePowers));
console.log(validateAnswer(86036, numArraySum(gamePowers)));
