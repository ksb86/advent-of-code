const path = require("path");
const { getInput, validateAnswer } = require("../helpers");

const input = getInput(path.resolve(__dirname, "./input.txt"));

function filterByCommonalityPosition(position, rows, which) {
    const rows0 = [];
    const rows1 = [];

    rows.forEach(row => {
        if (row[position] == '0') {
            rows0.push(row);
        }
        if (row[position] == '1') {
            rows1.push(row);
        }
    });

    if (rows.length === 1) {
        return rows[0];
    } else {
        if (which === '1') {
            return filterByCommonalityPosition(position+1, rows1.length >= rows0.length ? rows1 : rows0, which);
        }
        if (which === '0') {
            return filterByCommonalityPosition(position+1, rows0.length <= rows1.length ? rows0 : rows1, which);
        }
    }
}

const oxygen = filterByCommonalityPosition(0, input, '1');
const co2 = filterByCommonalityPosition(0, input, '0');
const oxygenInt = parseInt(oxygen, 2);
const co2Int = parseInt(co2, 2);
console.log(validateAnswer(4996233, oxygenInt * co2Int));