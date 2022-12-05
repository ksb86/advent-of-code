const path = require('path');
const { getInput, validateAnswer, newLineString } = require('../../helpers');

//     [P]                 [C] [C]
//     [W]         [B]     [G] [V] [V]
//     [V]         [T] [Z] [J] [T] [S]
//     [D] [L]     [Q] [F] [Z] [W] [R]
//     [C] [N] [R] [H] [L] [Q] [F] [G]
// [F] [M] [Z] [H] [G] [W] [L] [R] [H]
// [R] [H] [M] [C] [P] [C] [V] [N] [W]
// [W] [T] [P] [J] [C] [G] [W] [P] [J]
//  1   2   3   4   5   6   7   8   9

const stack = {
    s1: ['W','R','F'],
    s2: ['T','H','M','C','D','V','W','P'],
    s3: ['P','M','Z','N','L'],
    s4: ['J','C','H','R'],
    s5: ['C','P','G','H','Q','T','B'],
    s6: ['G','C','W','L','F','Z'],
    s7: ['W','V','L','Q','Z','J','G','C'],
    s8: ['P','N','R','F','W','T','V','C'],
    s9: ['J','W','H','G','R','S','V'],
};

const input = getInput(path.resolve(__dirname, './input.txt'));

function makeNumber(str) {
    return Number(str.replace(/[^0-9.]/g, ''))
}
input.forEach(command => {
    let [qty, positions] = command.split('from');
    qty = makeNumber(qty);

    let [from, to] = positions.split('to');
    from = makeNumber(from);
    to = makeNumber(to);

    for (var i = 0; i < qty; i++) {
        const moving = stack[`s${from}`].pop();
        stack[`s${to}`].push(moving);
    }
});


function getFinalTops() {
    return `${stack.s1?.[stack.s1.length-1] || ''}${stack.s2?.[stack.s2.length-1] || ''}${stack.s3?.[stack.s3.length-1] || ''}${stack.s4?.[stack.s4.length-1] || ''}${stack.s5?.[stack.s5.length-1] || ''}${stack.s6?.[stack.s6.length-1] || ''}${stack.s7?.[stack.s7.length-1] || ''}${stack.s8?.[stack.s8.length-1] || ''}${stack.s9?.[stack.s9.length-1] || ''}`
}

// start: FPLRBZCCV
console.log(getFinalTops());
console.log(validateAnswer('CVCWCRTVQ', getFinalTops()));