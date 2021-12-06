const path = require("path");
const { getInput, validateAnswer } = require("../../helpers");
const stopDay = 80;
let day = 0;

let input = getInput(path.resolve(__dirname, "./input.txt"))[0].split(',').map(age => Number(age));
let ageMap = [...new Array(9).keys()];
let ageCounts = ageMap.map(age => {
    return input.filter(ageInput => ageInput === age).length;
});

while (day < stopDay) {
    let zeroes = 0;
    ageCounts = ageCounts.map((ageCount, i, arr) => {
        if (i === 0) {
            zeroes = ageCount;
        }
        if (i === arr.length - 1) {
            return zeroes;
        } else {
            return arr[i+1];
        }
    });
    ageCounts[6] += zeroes;

    day++;
}

const totalFish = ageCounts.reduce((acc, curr) => {
    return acc += curr;
}, 0);
console.log({totalFish});

console.log(validateAnswer(362346, totalFish));