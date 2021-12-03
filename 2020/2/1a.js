const path = require('path');
const { getInput, validateAnswer } = require('../../helpers');

const lines = getInput(path.resolve(__dirname, './input'));

const validPasswords = lines.filter(item => {
    const [rule, password] = item.split(': ');
    const [nums, ruleLetter] = rule.split(' ');
    const [min, max] = nums.split('-');
    const letterCount = (password.match(new RegExp(`${ruleLetter}`, 'g')) || []).length;
    return letterCount >= min && letterCount <= max;
});
console.log(validPasswords.length);

console.log(validateAnswer(603, validPasswords.length));