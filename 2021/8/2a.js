const path = require("path");
const { getInput, validateAnswer } = require("../../helpers");
let input = getInput(path.resolve(__dirname, "./input.txt"));

const decodedDigitKey = [
    'abcefg',
    'cf',
    'acdeg',
    'acdfg',
    'bcdf',
    'abdfg',
    'abdefg',
    'acf',
    'abcdefg',
    'abcdfg'
];

function getLetterMappings(line) {
    let a, b, c, d, e, f, g;
    const [pattern, output] = line.split(' | ');
    const patterns = pattern.split(' ');
    const digits = output.split(' ');

    const number1SegmentLetters = patterns.find(p => p.length === 2).split('');
    const number7SegmentLetters = patterns.find(p => p.length === 3).split('');
    const number4SegmentLetters = patterns.find(p => p.length === 4).split('');
    const number8SegmentLetters = patterns.find(p => p.length === 7).split('');
    const fiveSegmentCountLetters = patterns.filter(p => p.length === 5).join('').split('');
    const sixSegmentCountLetters = patterns.filter(p => p.length === 6).join('').split('');

    // a
    a = number7SegmentLetters.find(letter => !number1SegmentLetters.includes(letter));

    // e
    const fiveAndSixSegmentCountLetters = [...fiveSegmentCountLetters, ...number4SegmentLetters].sort();
    e = number8SegmentLetters.find(letter => {
        return fiveAndSixSegmentCountLetters.filter(l => l === letter).length === 1;
    });

    // g
    g = number8SegmentLetters.find(letter => {
        return ![a, e, ...number4SegmentLetters].includes(letter);
    });

    // c
    const twoOccuranceLetters = number8SegmentLetters.filter(letter => {
        return [e, ...sixSegmentCountLetters].filter(l => l === letter).length == 2;
    });
    c = twoOccuranceLetters.find(l => number1SegmentLetters.includes(l));

    // d
    d = number8SegmentLetters.filter(letter => {
        return [c, e, ...sixSegmentCountLetters].filter(l => l === letter).length == 2;
    })[0];

    // b
    const bLetters = [a,c,d,e,g,...number7SegmentLetters];
    b = number8SegmentLetters.find(letter => {
        return !bLetters.includes(letter);
    });

    // f
    f = number8SegmentLetters.find(letter => {
        return ![a,b,c,d,e,g].includes(letter);
    });

    // swap keys/values
    const tempMapping = {a, b, c, d, e, f, g};
    const mapping = Object.entries(tempMapping).reduce((acc, [key, value]) => {
        acc[value] = key;
        return acc;
    }, {});

    return {
        mapping,
        digits
    };
}

const mappings = input.map(getLetterMappings);

const total = mappings.reduce((acc, {mapping, digits}) => {
    const decodedDigits = digits.map(digit => {
        return digit.split('').map(letter => {
            return mapping[letter];
        }).sort().join('');
    });
    const number = decodedDigits.map(decodedDigit => {
        return decodedDigitKey.indexOf(decodedDigit);
    }).join('');
    acc += Number(number);
    return acc;
}, 0);

console.log({total});
console.log(validateAnswer(933305, total));