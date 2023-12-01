const path = require('path');
const {
    getInput,
    numArrayProduct,
    numArraySum,
    newLineString,
    validateAnswer,
    sortBy,
} = require('../../helpers');

const input = getInput(path.resolve(__dirname, './input.txt'));
const numbers = input.map((line, i) => {
    let [first] = line.match(/(1|2|3|4|5|6|7|8|9|one|two|three|four|five|six|seven|eight|nine)/i);
    first = first.replace(/(one|two|three|four|five|six|seven|eight|nine)/i, function(...args) {
        switch (args[0]) {
            case 'one': return "1";
            case 'two': return "2";
            case 'three': return "3";
            case 'four': return "4";
            case 'five': return "5";
            case 'six': return "6";
            case 'seven': return "7";
            case 'eight': return "8";
            case 'nine': return "9";
        }
    });
    let [last] = line.split('').toReversed().join('').match(/(1|2|3|4|5|6|7|8|9|eno|owt|eerht|ruof|evif|xis|neves|thgie|enin)/i);
    last = last.replace(/(eno|owt|eerht|ruof|evif|xis|neves|thgie|enin)/i, function(...args) {
        switch (args[0]) {
            case 'eno': return "1";
            case 'owt': return "2";
            case 'eerht': return "3";
            case 'ruof': return "4";
            case 'evif': return "5";
            case 'xis': return "6";
            case 'neves': return "7";
            case 'thgie': return "8";
            case 'enin': return "9";
        }
    });

    const num = Number(`${first}${last}`)
    // console.log({first, last, num})
    // return Number(firstLast);
    return num;
});
const sum = numArraySum(numbers);

console.log(sum);
console.log(validateAnswer(53592, sum));
