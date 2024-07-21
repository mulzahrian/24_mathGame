// script.js
const boxes = document.querySelectorAll('.number-box');
const shuffleButton = document.getElementById('shuffle-button');
const checkButton = document.getElementById('check-button');
const solutionContainer = document.getElementById('solution-container');

const validCombinations = [
    [1, 1, 1, 21],
    [1, 1, 2, 20],
    [1, 1, 3, 19],
    [1, 1, 4, 18],
    [1, 1, 5, 17],
    [1, 1, 6, 16],
    [1, 1, 7, 15],
    [1, 1, 8, 14],
    [1, 1, 9, 13],
    [1, 2, 2, 19],
    [1, 2, 3, 18],
    [1, 2, 4, 17],
    [1, 2, 5, 16],
    [1, 2, 6, 15],
    [1, 2, 7, 14],
    [1, 2, 8, 13],
    [1, 2, 9, 12],
    [1, 3, 3, 17],
    [1, 3, 4, 16],
    [1, 3, 5, 15],
    [1, 3, 6, 14],
    [1, 3, 7, 13],
    [1, 3, 8, 12],
    [1, 3, 9, 11],
    [1, 4, 4, 15],
    [1, 4, 5, 14],
    [1, 4, 6, 13],
    [1, 4, 7, 12],
    [1, 4, 8, 11],
    [1, 4, 9, 10],
    [1, 5, 5, 13],
    [1, 5, 6, 12],
    [1, 5, 7, 11],
    [1, 5, 8, 10],
    [1, 5, 9, 9],
    [1, 6, 6, 11],
    [1, 6, 7, 10],
    [1, 6, 8, 9],
    [1, 6, 9, 8],
    [1, 7, 7, 9],
    [1, 7, 8, 8],
    [1, 7, 9, 7],
    [1, 8, 8, 7],
    [1, 8, 9, 6],
    [1, 9, 9, 5],
    [2, 2, 2, 18],
    [2, 2, 3, 17],
    [2, 2, 4, 16],
    [2, 2, 5, 15],
    [2, 2, 6, 14],
    [2, 2, 7, 13],
    [2, 2, 8, 12],
    [2, 2, 9, 11],
    [2, 3, 3, 16],
    [2, 3, 4, 15],
    [2, 3, 5, 14],
    [2, 3, 6, 13],
    [2, 3, 7, 12],
    [2, 3, 8, 11],
    [2, 3, 9, 10],
    [2, 4, 4, 14],
    [2, 4, 5, 13],
    [2, 4, 6, 12],
    [2, 4, 7, 11],
    [2, 4, 8, 10],
    [2, 4, 9, 9],
    [2, 5, 5, 12],
    [2, 5, 6, 11],
    [2, 5, 7, 10],
    [2, 5, 8, 9],
    [2, 5, 9, 8],
    [2, 6, 6, 10],
    [2, 6, 7, 9],
    [2, 6, 8, 8],
    [2, 6, 9, 7],
    [2, 7, 7, 8],
    [2, 7, 8, 7],
    [2, 7, 9, 6],
    [2, 8, 8, 6],
    [2, 8, 9, 5],
    [2, 9, 9, 4],
    [3, 3, 3, 15],
    [3, 3, 4, 14],
    [3, 3, 5, 13],
    [3, 3, 6, 12],
    [3, 3, 7, 11],
    [3, 3, 8, 10],
    [3, 3, 9, 9],
    [3, 4, 4, 13],
    [3, 4, 5, 12],
    [3, 4, 6, 11],
    [3, 4, 7, 10],
    [3, 4, 8, 9],
    [3, 4, 9, 8],
    [3, 5, 5, 11],
    [3, 5, 6, 10],
    [3, 5, 7, 9],
    [3, 5, 8, 8],
    [3, 5, 9, 7],
    [3, 6, 6, 9],
    [3, 6, 7, 8],
    [3, 6, 8, 7],
    [3, 6, 9, 6],
    [3, 7, 7, 7],
    [3, 7, 8, 6],
    [3, 7, 9, 5],
    [3, 8, 8, 5],
    [3, 8, 9, 4],
    [3, 9, 9, 3],
    [4, 4, 4, 12],
    [4, 4, 5, 11],
    [4, 4, 6, 10],
    [4, 4, 7, 9],
    [4, 4, 8, 8],
    [4, 4, 9, 7],
    [4, 5, 5, 10],
    [4, 5, 6, 9],
    [4, 5, 7, 8],
    [4, 5, 8, 7],
    [4, 5, 9, 6],
    [4, 6, 6, 8],
    [4, 6, 7, 7],
    [4, 6, 8, 6],
    [4, 6, 9, 5],
    [4, 7, 7, 6],
    [4, 7, 8, 5],
    [4, 7, 9, 4],
    [4, 8, 8, 4],
    [4, 8, 9, 3],
    [4, 9, 9, 2],
    [5, 5, 5, 9],
    [5, 5, 6, 8],
    [5, 5, 7, 7],
    [5, 5, 8, 6],
    [5, 5, 9, 5],
    [5, 6, 6, 7],
    [5, 6, 7, 6],
    [5, 6, 8, 5],
    [5, 6, 9, 4],
    [5, 7, 7, 5],
    [5, 7, 8, 4],
    [5, 7, 9, 3],
    [5, 8, 8, 3],
    [5, 8, 9, 2],
    [5, 9, 9, 1],
    [6, 6, 6, 6],
    [6, 6, 7, 5],
    [6, 6, 8, 4],
    [6, 6, 9, 3],
    [6, 7, 7, 4],
    [6, 7, 8, 3],
    [6, 7, 9, 2],
    [6, 8, 8, 2],
    [6, 8, 9, 1],
    [6, 9, 9, 0],
    [7, 7, 7, 3],
    [7, 7, 8, 2],
    [7, 7, 9, 1],
    [7, 8, 8, 1],
    [7, 8, 9, 0],
    [7, 9, 9, -1],
    [8, 8, 8, 0],
    [8, 8, 9, -1],
    [8, 9, 9, -2],
    [9, 9, 9, -3]
];

function shuffleNumbers() {
    let combination = validCombinations[Math.floor(Math.random() * validCombinations.length)];
    combination = combination.map(num => Math.abs(num));
    boxes.forEach((box, index) => {
        box.textContent = combination[index];
    });
    solutionContainer.textContent = '';
}

function checkSolution() {
    const numbers = Array.from(boxes).map(box => parseInt(box.textContent));
    const solutions = findSolutions(numbers, 24);

    if (solutions.length === 0) {
        solutionContainer.textContent = 'Tidak ada solusi yang ditemukan.';
    } else {
        solutionContainer.innerHTML = solutions.map(sol => sol.join(' ')).join('<br>');
    }
}

function findSolutions(numbers, target) {
    const results = [];
    const operators = ['+', '-', '*', '/'];

    function helper(current, remaining) {
        if (remaining.length === 0) {
            if (Math.abs(eval(current) - target) < 1e-6) {
                results.push(current);
            }
            return;
        }

        for (let i = 0; i < remaining.length; i++) {
            const next = remaining.slice();
            next.splice(i, 1);
            for (const op of operators) {
                helper(`${current}${op}${remaining[i]}`, next);
                helper(`(${current})${op}${remaining[i]}`, next);
            }
        }
    }

    for (let i = 0; i < numbers.length; i++) {
        const remaining = numbers.slice();
        remaining.splice(i, 1);
        helper(`${numbers[i]}`, remaining);
    }

    return results;
}

shuffleButton.addEventListener('click', shuffleNumbers);
checkButton.addEventListener('click', checkSolution);

// Initial shuffle
shuffleNumbers();
