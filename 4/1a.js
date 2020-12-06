const path = require('path');
const { getInput, newLineString } = require('../helpers');

const lines = getInput(path.resolve(__dirname, './input'), true);

const passports = lines.split(`${newLineString}${newLineString}`);

console.log({passports});