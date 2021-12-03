const path = require("path");
const { getInput, validateAnswer } = require("../helpers");

const input = getInput(path.resolve(__dirname, "./input.txt"));

let horizon = 0;
let depth = 0;
let aim = 0;

input.forEach(line => {
    const [instruction, amount] = line.split(" ");
    const amountNum = Number(amount);
    switch (instruction) {
        case "forward": {
            horizon += amountNum;
            if (aim) {
                depth += (aim * amountNum);
            }
            break;
        }
        case "down": {
            aim += amountNum;
            break;
        }
        case "up": {
            aim -= amountNum;
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

console.log(validateAnswer(2006917119, result));
