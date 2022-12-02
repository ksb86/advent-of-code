const path = require("path");
const { getInput, validateAnswer } = require("../../helpers");

let input = getInput(path.resolve(__dirname, "./input.txt")).map(line => line.split(''));


console.log({});
// console.log(validateAnswer(, ));