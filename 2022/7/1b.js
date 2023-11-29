const path = require('path');
const { getInput, validateAnswer, sortBy } = require('../../helpers');

// tried creating file system with actual files with specified sizes then `$ du` to list dirs and sizes but folders were included in dir sizes
const lines = getInput(path.resolve(__dirname, './du.output'));
const sizes = lines.map(line => {
    let [size, path] = line.split('./');
    size = size.trim();
    path = path?.trim();
    return {
        size: Number(size),
        path,
    }
});

const totalSizeUnder100000 = sizes.filter(({size}) => size <= 100000).sort(sortBy('size')).reverse().reduce((acc, curr) => {
    return acc+= curr.size;
}, 0);
console.log(totalSizeUnder100000);
console.log(validateAnswer(1, lines.length));
// not 1229000