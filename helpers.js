const fs = require('fs');

module.exports = {
    getInput,
    numArrayProduct,
};

function getInput(path) {
    let list = fs.readFileSync(path, {encoding: 'utf8'});
    return list.split('\n'); // osx
    // return list.split('\r\n'); // windows
};

function numArrayProduct(numArray) {
    return numArray.reduce((product, num) => {
        product*=num;
        return product;
    }, 1);
};