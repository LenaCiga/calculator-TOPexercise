const num1 = 0;
// const operator = ["+","-","*","/"]; //not final
const num2 = 0;

//function for add
const add = function (a, b) {
    return a + b;
};
//function for subtract
const subtract = function (a, b) {
    return a - b;
};
//function for multiply
const multiply = function (a, b) {
    return a * b;
};
//function for divide
const divide = function (a, b) {
    return a / b;
};

const operate = function (num1, operator, num2) {
    if (operator === "+") {
        return add(num1, num2);
    }
    else if (operator === "-") {
        return subtract(num1, num2);
    }
    else if (operator === "*") {
        return multiply(num1, num2);
    }
    else {
        return divide(num1, num2);
    }
} //does this returns the num right away without pressing enter or =