let numberOne = 0;
let numberTwo = 0;
let operator = "";
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