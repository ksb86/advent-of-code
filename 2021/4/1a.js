const path = require("path");
const { getInput, validateAnswer } = require("../helpers");

const input = getInput(path.resolve(__dirname, "./input.txt"));

console.log(validateAnswer(0, 0));
