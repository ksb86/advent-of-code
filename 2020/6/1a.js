const path = require('path');
const { getInput, newLineString, numArraySum, validateAnswer } = require('../../helpers');

const groups = getInput(path.resolve(__dirname, './input'), { splitTwoLines: true });

const cleanedDeduppedGroups = groups.map(group => {
    const cleanedLetterArray = group.replace(/\s/gi, '').split('');
    return [...new Set(cleanedLetterArray)].length;
});
const sumOfUniqueQuestionCounts = numArraySum(cleanedDeduppedGroups);
console.log({sumOfUniqueQuestionCounts});
console.log(validateAnswer(6291, sumOfUniqueQuestionCounts));
