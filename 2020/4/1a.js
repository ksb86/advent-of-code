const path = require('path');
const { getInput, newLineString, validateAnswer } = require('../../helpers');

const requiredFields = [
    'byr',
    'iyr',
    'eyr',
    'hgt',
    'hcl',
    'ecl',
    'pid',
    // 'cid',
];

const lines = getInput(path.resolve(__dirname, './input'), { readAsString: true });

const passports = lines.split(`${newLineString}${newLineString}`);

const validPassports = passports.reduce((acc, curr) => {
    const passportStr = curr.replace(/\s+/gi, ' ');
    const isValid = requiredFields.every(field => {
        return passportStr.includes(field);
    });
    if (isValid) {
        acc++;
    }
    return acc;
}, 0);

console.log({validPassports});

console.log(validateAnswer(264, validPassports));