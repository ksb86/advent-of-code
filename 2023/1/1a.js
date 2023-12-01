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
const numbers = input.map((line) => {
    const nums = line.match(/\d/gi);
    if (nums.length < 2) {
        nums.push(nums[0]);
    }
    return nums[0] + nums[nums.length - 1];
});
const sum = numArraySum(numbers.map(Number));

console.log(sum);
console.log(validateAnswer(55621, sum));
