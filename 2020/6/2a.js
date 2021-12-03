const path = require('path');
const { getInput, newLineString, numArraySum, validateAnswer } = require('../../helpers');

const input = getInput(path.resolve(__dirname, './input'), true);

const groups = input.split(`${newLineString}${newLineString}`);

const cleanedDeduppedGroups = groups.forEach(group => {
    const person = group.split(/\s/gi);
    console.log({person});
    // return [...new Set(cleanedLetterArray)].length;
});
const sumOfUniqueQuestionCounts = numArraySum(cleanedDeduppedGroups);
console.log({sumOfUniqueQuestionCounts});
// console.log(validateAnswer(6534, sumOfUniqueQuestionCounts));
