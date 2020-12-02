const fs = require('fs');

module.exports = {
    getInput,
};

function getInput(path) {
    let list = fs.readFileSync(path, {encoding: 'utf8'});
    return list.split('\r\n');
};