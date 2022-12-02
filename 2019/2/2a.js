const path = require('path');
const { getInput, validateAnswer } = require('../../helpers');

const originalInput = getInput(path.resolve(__dirname, './input.txt'))[0].split(',').map(Number);

const add = (a, b) => a+b;
const mult = (a, b) => a*b;

let finalNoun;
let finalVerb;
let newInput;

for (let noun = 0; noun < 100; noun++) {
    for (let verb = 0; verb < 100; verb++) {
        newInput = [...originalInput];
        newInput[1] = noun;
        newInput[2] = verb;
        for (let i = 0; i < newInput.length; i++) {
            if (newInput[i] === 99) {
                continue;
            } else if (i%4 === 0) {
                let value
                if (newInput[i] === 1) {
                    value = add(newInput[newInput[i+1]], newInput[newInput[i+2]]);
                } else if (newInput[i] === 2) {
                    value = mult(newInput[newInput[i+1]], newInput[newInput[i+2]]);
                }
                newInput[newInput[i+3]] = value;
            }
        }
        if (newInput[0] === 19690720) {
            finalNoun = noun;
            finalVerb = verb;
        }
    }
}

const result = 100*finalNoun+finalVerb;

console.log({result});
console.log(validateAnswer(6718, result));
