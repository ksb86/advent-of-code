const path = require("path");
const { getInput, validateAnswer } = require("../../helpers");

let [calledNumbers, ...boards] = getInput(path.resolve(__dirname, "./input.txt"), { readAsString: true }).split('\n\n');
let lastCalledNumber;
const winningIndexes = [
    [0,1,2,3,4],
    [5,6,7,8,9],
    [10,11,12,13,14],
    [15,16,17,18,19],
    [20,21,22,23,24],
    [0,5,10,15,20],
    [1,6,11,16,21],
    [2,7,12,17,22],
    [3,8,13,18,23],
    [4,9,14,19,24],
];
calledNumbers = calledNumbers.split(',');
boards = boards.map(board => {
    return board.trim().split(/\s+/g);
});

function boardHasWin(board) {
    const checkedIndexes = board.map((num, i) => {
        if (num == 'x') {
            return i;
        }
        return undefined;
    });
    const filteredIndexes = checkedIndexes.filter(index => {
        return typeof index === 'number';
    });

    return winningIndexes.some(winningIndexList => {
        const test = winningIndexList.every(index => filteredIndexes.includes(index));
        return test;
    })
};

let skip = false;
calledNumbers.forEach((calledNumber, i) => {
    if (skip) {
        return;
    }
    boards = boards.map(board => {
        const newBoard = board.map(number => {
            if (calledNumber == number) {
                return 'x';
            }
            return number;
        });

        return newBoard;
    });


    if (boards.length === 1 && boardHasWin(boards[0])) {
        lastCalledNumber = calledNumber;
        skip = true;
        return;
    }

    boards = boards.filter(board => {
        return !boardHasWin(board);
    });
});

const unMarkedSum = boards[0].filter(item => Boolean(item) && item !== 'x').reduce((acc, curr) => {
    return acc += Number(curr);
}, 0);

// console.log({unMarkedSum});
// console.log({lastCalledNumber});
console.log(unMarkedSum*lastCalledNumber);

console.log(validateAnswer(22704, unMarkedSum*lastCalledNumber));