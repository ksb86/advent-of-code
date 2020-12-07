const fs = require('fs');

const newLineString = process.platform === "win32" ? '\r\n' : '\n';

module.exports = {
    getInput,
    numArrayProduct,
    numArraySum,
    newLineString,
    validateAnswer,
};


function getInput(path, readAsString) {
    let list = fs.readFileSync(path, {encoding: 'utf8'});
    if (readAsString) {
        return list;
    }
    return list.split(newLineString);
};

function numArrayProduct(numArray) {
    return numArray.reduce((product, num) => {
        product*=num;
        return product;
    }, 1);
};

function numArraySum(numArray) {
    return numArray.reduce((sum, num) => {
        sum+=num;
        return sum;
    }, 0);
};

function validateAnswer(expected, actual) {
    return expected === actual ? 'PASS' : 'FAIL';
};