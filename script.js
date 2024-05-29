let numberOne = 0;
let newNumber = 1;
let operator = "";
let display = "";
const displayEvent = document.querySelector(".display");
function updateDisplay(newText) {
    display = newText;
    displayEvent.textContent = display;
}
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

function operate(operator, firstNumber, secondNumber) {
    let result = 0;
    switch (operator) {
        case "+":
            result = add(firstNumber, secondNumber);
            break;
        case "-":
            result = subtract(firstNumber, secondNumber);
            break;
        case "*":
            result = multiply(firstNumber, secondNumber);
            break;
        case "/":
            result = divide(firstNumber, secondNumber);
            break;
    }
    return result;
}

const buttons = document.querySelectorAll("button");
buttons.forEach(button=>button.addEventListener("click", e=>readButton(e)));

function readButton(event) {
    if(Array.from(event.target.classList).includes("digit")) {
        if(newNumber === 1) {
            updateDisplay(event.target.textContent);
            newNumber = 0;
        }
        else
            updateDisplay(display + event.target.textContent);
    }
    else if(Array.from(event.target.classList).includes("operator")) {
        if(operator) {
            numberOne = operate(operator, numberOne, +display);
        }
        else {
            numberOne = +display;
        }
        operator = event.target.textContent;
        updateDisplay(numberOne);
        newNumber = 1;
    }
    else if(Array.from(event.target.classList).includes("decimal")) {
        if(newNumber === 1) {
            updateDisplay(event.target.textContent);
            newNumber = 0;
        }
        else if (!display.includes("."))
            updateDisplay(display + event.target.textContent);
    }
    else if(Array.from(event.target.classList).includes("equals")) {
        if(newNumber !== 1 && operator) {
            numberOne = operate(operator, numberOne, +display);
            operator = "";
            updateDisplay(numberOne);
            newNumber = 1;
        }
    }
    else if(Array.from(event.target.classList).includes("clearAll")) {
        operator = "";
        updateDisplay("");
        newNumber = 1;
    }
}