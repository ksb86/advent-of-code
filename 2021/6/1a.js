const path = require("path");
const { getInput, validateAnswer } = require("../../helpers");

let input = getInput(path.resolve(__dirname, "./input.txt"))[0].split(',');
input = input.map(age => Number(age));

let day = 0;
while (day < 80) {
    const newFish = [];
    input = input.map(age => {
        if (age === 0) {
            newFish.push(8);
            return 6;
        } else {
            return age - 1;
        }
    });

    input = [...input, ...newFish];
    day++;
}

console.log(input.length);
console.log(validateAnswer(362346, input.length));