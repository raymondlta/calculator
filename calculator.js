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
        firstVal.push(val);
        displayVal = firstVal.join('');
    }
    else {
        secondVal.push(val);
        displayVal = secondVal.join('');
    }
    updateDisplay()
}

function clickOperator(operation) {
    if (!operator) {
       operator = operation;
       secondVal = [];
       displayVal = 0;
    }
    /*else if (operation === '=') {
        if (operator) {
            const first = parseInt(firstVal.join(''));
            const second = parseInt(secondVal.join(''));
            displayVal = operate(first, second, operator);
        }
    }*/
    else {
        const first = parseInt(firstVal.join(''));
        const second = parseInt(secondVal.join(''));
        displayVal = operate(first, second, operator);
        operator = operation !== '='? operation : operator;
        firstVal = (displayVal + '').split('');
        secondVal = operation !== '=' ? [] : secondVal;
    }
    updateDisplay();
}

clearDisplay();