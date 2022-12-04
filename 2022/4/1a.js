const path = require('path');
const { getInput, validateAnswer, newLineString } = require('../../helpers');

const input = getInput(path.resolve(__dirname, './input.txt'));

const result = input.filter(pair => {
    const [a, b] = pair.split(',');
    const [as, ae] = a.split('-');
    const [bs, be] = b.split('-');
    return (Number(as) >= Number(bs) && Number(ae) <= Number(be)) || (Number(bs) >= Number(as) && Number(be) <= Number(ae))
});
console.log(result.length);
console.log(validateAnswer(651, result.length));