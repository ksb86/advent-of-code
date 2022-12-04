const path = require('path');
const { getInput, newLineString, validateAnswer } = require('../../helpers');

const fieldRules = [
    {
        // byr (Birth Year) - four digits; at least 1920 and at most 2002.
        field: 'byr',
        rule: (input) => {
            const num = Number(input);
            return num >= 1920 && num <= 2002;
        },
    }, {
        // iyr (Issue Year) - four digits; at least 2010 and at most 2020.
        field: 'iyr',
        rule: (input) => {
            const num = Number(input);
            return num >= 2010 && num <= 2020;
        },
    }, {
        // eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
        field: 'eyr',
        rule: (input) => {
            const num = Number(input);
            return num >= 2020 && num <= 2030;
        },
    }, {
        // hgt (Height) - a number followed by either cm or in:
        //     If cm, the number must be at least 150 and at most 193.
        //     If in, the number must be at least 59 and at most 76.
        field: 'hgt',
        rule: (input) => {
            const num = Number(input.replace(/[a-z]/gi, ''));
            const unit = input.replace(/[0-9]/gi, '');
            if (unit === 'cm') {
                return num >= 150 && num <= 193;
            } else if (unit === 'in') {
                return num >= 59 && num <= 76;
            }
            return false;
        },
    }, {
        // hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
        field: 'hcl',
        rule: (input) => {
            return /^#[a-f0-9]{6}$/gi.test(input);
        },
    }, {
        // ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
        field: 'ecl',
        rule: (input) => {
            return ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(input);
        },
    }, {
        // pid (Passport ID) - a nine-digit number, including leading zeroes.
        field: 'pid',
        rule: (input) => {
            return /^[0-9]{9}$/gi.test(input);
        },
    },
    // 'cid',
    // cid (Country ID) - ignored, missing or not.
];

const isPassportValid = (passportObj) => {
    // ensure all fields are valid
    return fieldRules.every(({field, rule}) => {
        return passportObj[field] && rule(passportObj[field]);
    });
};

const lines = getInput(path.resolve(__dirname, './input'), { readAsString: true });

// split by double line breaks into single passports
const passports = lines.split(`${newLineString}${newLineString}`);

const validPassports = passports.reduce((ppAcc, ppCurr) => {
    // split by spaces into field key/valud strings
    const passportParts = ppCurr.split(/\s+/gi);
    // build objects to work with
    const passportObject = passportParts.reduce((acc, curr) => {
        const [id, value] = curr.split(':');
        acc[id] = value;
        return acc;
    }, {});
    // increment if valid
    if (isPassportValid(passportObject)) {
        ppAcc++
    };
    return ppAcc;
}, 0);

console.log({validPassports});

console.log(validateAnswer(150, validPassports));