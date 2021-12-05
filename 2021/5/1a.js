const path = require("path");
const { getInput, validateAnswer } = require("../../helpers");

let input = getInput(path.resolve(__dirname, "./input.txt"));
let points = [];

const lines = input.map(line => {
    const [start, end] = line.split(' -> ');
    const [x1, y1] = start.split(',');
    const [x2, y2] = end.split(',');
    return {
        x1: Number(x1),
        y1: Number(y1),
        x2: Number(x2),
        y2: Number(y2),
    };
});

let dupCount = 0;

lines.forEach(({x1, y1, x2, y2}) => {
    if (x1 === x2) {
        const start = Math.min(y1, y2);
        const end = Math.max(y1, y2);
        for (let y = start; y <= end; y++) {
            points.push(`${x1}-${y}`);
        }
    } else if (y1 === y2) {
        const start = Math.min(x1, x2);
        const end = Math.max(x1, x2);
        for (let x = start; x <= end; x++) {
            points.push(`${x}-${y1}`);
        }
    }
});

const uniquePoints = [];
const duplicates = [];
// inefficient, should find better way
points.forEach(point => {
    if (uniquePoints.includes(point) && !duplicates.includes(point)) {
        duplicates.push(point);
        dupCount++;
    } else {
        uniquePoints.push(point);
    }
});

console.log({dupCount});
console.log(validateAnswer(6666, dupCount));