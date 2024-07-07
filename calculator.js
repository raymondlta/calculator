function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, operation) {
    switch (operation) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
    }
}

let firstVal;
let secondVal;
let operator;
let displayVal;
const display = document.querySelector(".display");
/*
const oneBtn = document.querySelector(".one");
const twoBtn = document.querySelector(".two");
const threeBtn = document.querySelector(".three");
const fourBtn = document.querySelector(".four");
const fiveBtn = document.querySelector(".five");
const sixBtn = document.querySelector(".six");
const sevenBtn = document.querySelector(".seven");
const eightBtn = document.querySelector(".eigth");
const nineBtn = document.querySelector(".nine");
*/

function updateDisplay() {
    display.textContent = displayVal;
}

function clearDisplay() {
    displayVal = 0;
    firstVal = [];
    secondVal = [];
    operator = null;
    updateDisplay();
}

function clickDigit(val) {
    if (!operator) {
        if (val !== 0 || (val === 0 && firstVal.length > 0)) {
            firstVal.push(val);
            displayVal = firstVal.join('');
        }
    }
    else {
        if (val !== 0 || (val === 0 && secondVal.length > 0)) {
            secondVal.push(val);
            displayVal = secondVal.join('');
        }
    }
    updateDisplay()
}

function clickDecimal() {
    if (operator) {
        if (secondVal.length > 0 && secondVal.indexOf('.') === -1) {
            secondVal.push('.');
            displayVal = secondVal.join('');
        }
        else if (secondVal.length === 0 && secondVal.indexOf('.') === -1) {
            secondVal.push('0', '.');
            displayVal = secondVal.join('');
        }
    } else {
        if (firstVal.length > 0 && firstVal.indexOf('.') === -1) {
            firstVal.push('.')
            displayVal = firstVal.join('');
        }
        else if (firstVal.length === 0 && firstVal.indexOf('.') === -1) {
            firstVal.push('0', '.');
            displayVal = firstVal.join('');
        }
    }
    updateDisplay();
}

function performOperation() {
    const first = parseFloat(firstVal.join(''));
    const second = parseFloat(secondVal.join(''));
    displayVal = operate(first, second, operator);
    firstVal = (displayVal + '').split('');
    secondVal = [];
}

function clickOperator(operation) {
    if (!operator && firstVal.length > 0) {
       operator = operation;
       secondVal = [];
       displayVal = 0;
    }
    else if (operator && secondVal.length > 0) {
        performOperation();
        operator = operation;
    }
    else if (operator && secondVal.length === 0) {
        operator = operation;
    }
    updateDisplay();
}

function clickEquals() {
    if (operator && secondVal.length > 0) {
        performOperation();
    }
    updateDisplay();
}

clearDisplay();

document.addEventListener('keydown', function (e) {
    if (/[0-9]/i.test(e.key)) {
        clickDigit(e.key);
    }
    else if (e.key === '.') {
        clickDecimal();
    }
    else if (e.key === '=' || e.key === 'Enter') {
        clickEquals();
    }
    else if (/[+-/*]/i.test(e.key)) {
        clickOperator(e.key);
    }
});