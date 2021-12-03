const path = require("path");
const { getInput, validateAnswer } = require("../helpers");

const input = getInput(path.resolve(__dirname, "./input.txt"));

let horizon = 0;
let depth = 0;

input.forEach(line => {
    const [instruction, amount] = line.split(" ");
    const amountNum = Number(amount);
    switch (instruction) {
        case "forward": {
            horizon += amountNum;
            break;
        }
        case "down": {
            depth += amountNum;
            break;
        }
        case "up": {
            depth -= amountNum;
            break;
        }
        default: {
            break;
        }
    }
});

console.log({horizon, depth});
const result = horizon * depth;
console.log({result});

console.log(validateAnswer(1989014, result));
