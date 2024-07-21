// script.js
const boxes = document.querySelectorAll('.number-box');
const shuffleButton = document.getElementById('shuffle-button');
const checkButton = document.getElementById('check-button');
const solutionContainer = document.getElementById('solution-container');

// Generate a challenging set of numbers
function generateChallengingNumbers() {
    const min = 1;
    const max = 9;
    const range = max - min + 1;
    const numbers = [];

    while (numbers.length < 4) {
        let num = Math.floor(Math.random() * range) + min;
        // Avoid duplicates and ensure numbers are not too easy
        if (numbers.indexOf(num) === -1) {
            numbers.push(num);
        }
    }

    return numbers;
}

function shuffleNumbers() {
    let numbers = generateChallengingNumbers();
    boxes.forEach((box, index) => {
        box.textContent = numbers[index];
    });
    solutionContainer.textContent = '';
}

function checkSolution() {
    const numbers = Array.from(boxes).map(box => parseInt(box.textContent));
    const solutions = findSolutions(numbers, 24);

    if (solutions.length === 0) {
        solutionContainer.textContent = 'Tidak ada solusi yang ditemukan.';
    } else {
        // Tampilkan hingga 4 solusi, dengan preferensi campuran operasi
        const maxSolutions = 4;
        solutionContainer.innerHTML = solutions.slice(0, maxSolutions)
            .map(sol => `<div>${sol.expression}</div>`)
            .join('<br>');
    }
}

function findSolutions(numbers, target) {
    const results = [];
    const operators = ['+', '-', '*', '/'];

    function helper(current, remaining) {
        if (remaining.length === 0) {
            try {
                if (Math.abs(eval(current) - target) < 1e-6) {
                    results.push({ expression: current, usedOperators: getOperators(current) });
                }
            } catch (e) {
                // Ignore invalid expressions
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

    function getOperators(expression) {
        const operatorCount = { '+': 0, '-': 0, '*': 0, '/': 0 };
        for (const char of expression) {
            if (operatorCount[char] !== undefined) {
                operatorCount[char]++;
            }
        }
        return operatorCount;
    }

    for (let i = 0; i < numbers.length; i++) {
        const remaining = numbers.slice();
        remaining.splice(i, 1);
        helper(`${numbers[i]}`, remaining);
    }

    // Sort results to prefer mixed operators
    results.sort((a, b) => {
        const aOps = Object.values(a.usedOperators).reduce((sum, count) => sum + count, 0);
        const bOps = Object.values(b.usedOperators).reduce((sum, count) => sum + count, 0);
        return aOps - bOps;
    });

    return results;
}

shuffleButton.addEventListener('click', shuffleNumbers);
checkButton.addEventListener('click', checkSolution);

// Initial shuffle
shuffleNumbers();
