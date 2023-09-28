/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}

function addNumbers(){
    let add1 = Number(document.getElementById("add1").value);
    let add2 = Number(document.getElementById("add2").value);

    document.getElementById("sum").value = add(add1, add2);
}

document.getElementById("addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function (number1, number2) {
    return number1 - number2;
}

const subtractNumbers = function (){
    let subtract1 = Number(document.getElementById("subtract1").value);
    let subtract2 = Number(document.getElementById("subtract2").value);

    document.getElementById("difference").value = subtract(subtract1, subtract2);
}

document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
function multiply(number1, number2) {
    return number1 * number2;
}

const multiplyNumbers = () => {
    let factor1 = Number(document.getElementById("factor1").value);
    let factor2 = Number(document.getElementById("factor2").value);

    document.getElementById("product").value = multiply(factor1, factor2);
}

document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
function divide (number1, number2){
    return number1 / number2;
}

const divideNumbers = function (){
    let dividend = Number(document.getElementById("dividend").value);
    let divisor = Number(document.getElementById("divisor").value);

    document.getElementById("quotient").value = divide(dividend, divisor);
}

document.getElementById("divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
let todaysDate = new Date();
let currentYear;
currentYear = todaysDate.getFullYear;
document.getElementById("year").textContent = currentYear;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.getElementById("array").innerHTML = newArray;

/* Output Odds Only Array */
document.getElementById("odds").innerHTML = newArray.filter(number => number % 2 != 0);

/* Output Evens Only Array */
document.getElementById("evens").innerHTML = newArray.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */
document.getElementById("sumOfArray").innerHTML = newArray.reduce((total, number) => total + number);

/* Output Multiplied by 2 Array */
document.getElementById("multiplied").innerHTML = newArray.map(number => number * 2);

/* Output Sum of Multiplied by 2 Array */
document.getElementById("sumOfMultiplied").innerHTML = newArray.map(number => number *2).reduce((total, number) => total + number);