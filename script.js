function add(strng) {
    let str = strng.replace(/\s+/g, '').split("+");
    let a = +str[0]; 
    let b = +str[1]; 
    return a + b;
}

function subtract(strng) {
    let str = strng.replace(/\s+/g, '').split("-");
    let a = +str[0]; 
    let b = +str[1]; 
    return a - b;
}

function multiply(strng) {
    let str = strng.replace(/\s+/g, '').split("*");
    let a = +str[0]; 
    let b = +str[1]; 
    return a * b;
}

function divide(strng) {
    let str = strng.replace(/\s+/g, '').split("/");
    let a = +str[0]; 
    let b = +str[1];
    if (b === 0 || b === undefined) {
        return "Math error!";
    } else {
        return a / b;
    }

}

function operate(operator, string) {
    if (operator === "+") {
        return add(string);
    } else if (operator === '-') {
        return subtract(string);
    } else if (operator === '*') {
        return multiply(string);
    } else if (operator === '/') {
        return divide(string);
    }
}

function operateMultiple(string) {
    let calculation = string.slice(0, -1);
    console.log(calculation);
    if (calculation.includes("+")) {
        return add(calculation);
    } else if (calculation.includes("-")) {
        return subtract(calculation);
    } else if (calculation.includes("*")) {
        return multiply(calculation);
    } else if (calculation.includes("/")) {
        return divide(calculation);
    }
}

// function displayResult() {
//     let result = operate(chosenOperator, display.innerText);
//     display.innerText = result;
// }

function displayResult() {
    let result = operate(chosenOperator, display.innerText);
    if (result === undefined) {
        display.innerText = "Math error!"
    } else {
        display.innerText = result;
    }
    // displayValue = result;
    // firstValue = result;
}

// function moreThanOne() {
//     let result = operate(chosenOperator, display.innerText);
//     display.innerText = `${result} ${chosenOperator} `;
//     console.log(result);
// }

function moreThanOneOperator() {
    let result = operateMultiple(display.innerText);
    display.innerText = `${result} ${chosenOperator} `;
    console.log(result);
}

function deleteChar() {
    let displayText = display.innerText.slice(0, -1);
    display.innerText = displayText;
}

function insertDot() {
    if (display.innerText === "") {
        display.innerText = "0."
    } else {
        display.innerText += "."
    }
}

const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operators");
const display = document.querySelector(".screen");
const equals = document.querySelector(".equals");
const clear = document.querySelector(".clear");
const del = document.querySelector(".delete");
const dot = document.querySelector(".dot");

let displayValue = "";
let firstValue;
let chosenOperator;


numbers.forEach((number) => {
    number.addEventListener('click', () => {
        display.innerText += number.innerText;
        displayValue += number.innerText;
    })
});

operators.forEach((symbol) => {
    symbol.addEventListener('click', () => {
        firstValue = displayValue;
        displayValue = "";
        chosenOperator = symbol.innerText;
        display.innerText += chosenOperator;
        if (display.innerText.split((/[+-\/\*]/)).length-1 > 1) {
            moreThanOneOperator();
        }
    })
});

clear.addEventListener("click", () => {
    display.innerText = "";
    displayValue = "";
    chosenOperator = "";
    firstValue = "";
});

equals.addEventListener('click', displayResult);
del.addEventListener('click', deleteChar);
dot.addEventListener('click', insertDot);

// document.addEventListener('keydown')