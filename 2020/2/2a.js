const path = require('path');
const { getInput, validateAnswer } = require('../../helpers');

const lines = getInput(path.resolve(__dirname, './input'));

const validPasswords = lines.filter(item => {
    const [rule, password] = item.split(': ');
    const [nums, ruleLetter] = rule.split(' ');
    const [firstPos, secondPos] = nums.split('-');

    return (password.charAt(firstPos-1) === ruleLetter) ^ (password.charAt(secondPos-1) === ruleLetter);
});
console.log(validPasswords.length);

console.log(validateAnswer(404, validPasswords.length));