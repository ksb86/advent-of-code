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
let expectedOutput = 248569531; // ACTUAL

// EXAMPLE
// input = getInput(path.resolve(__dirname, './example.txt'));
// expectedOutput = 6440; // EXAMPLE

const handTypes = {
    55555: 'G', // '7fiveofakind',
    14444: 'F', // '6fourofakind',
    22333: 'E', // '5fullhouse',
    11333: 'D', // '4threeofakind',
    12222: 'C', // '3twopair',
    11122: 'B', // '2onepair',
    11111: 'A', // '1highcard',
};

const cardSortKeyMap = {
    '2': 'H',
    '3': 'I',
    '4': 'J',
    '5': 'K',
    '6': 'L',
    '7': 'M',
    '8': 'N',
    '9': 'O',
    'T': 'P',
    'J': 'Q',
    'Q': 'R',
    'K': 'S',
    'A': 'T',
}

function getHandType(cards) {
    const lengths = cards.split('').map((card) => {
        const reg = new RegExp(`${card}`, 'gi');
        return cards.match(reg).length;
    }).sort().join('');

    return handTypes[lengths];
}
function createSortKey(type, hand) {
    const handSortKey = hand.replace(/2|3|4|5|6|7|8|9|T|J|Q|K|A/gi, matched => cardSortKeyMap[matched]);
    return `${type}${handSortKey}`;
}

myOutput = input.map((line) => {
    const [hand, bid] = line.match(/\w+/gi);
    let type;

    type = getHandType(hand);

    return {
        bid: Number(bid),
        sortKey: createSortKey(type, hand),
    };
}).sort(sortBy('sortKey'));

myOutput = myOutput.map(({bid}, i) => {
    return bid*(i+1);
});

myOutput = numArraySum(myOutput);
console.log({ myOutput });
console.log(validateAnswer(expectedOutput, myOutput));
