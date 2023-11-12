// Variables
//      Value 1, Value 2, Operator
let value1;
let value2;
let operator;

//      Buttons
let oneBtn = document.querySelector("#one-btn");
let twoBtn = document.querySelector("#two-btn");
let threeBtn = document.querySelector("#three-btn");
let fourBtn = document.querySelector("#four-btn");
let fiveBtn = document.querySelector("#five-btn");
let sixBtn = document.querySelector("#six-btn");
let sevenBtn = document.querySelector("#seven-btn");
let eightBtn = document.querySelector("#eight-btn");
let nineBtn = document.querySelector("#nine-btn");
let zeroBtn = document.querySelector("#zero-btn");
let clearBtn = document.querySelector("#clear-btn");
let deleteBtn = document.querySelector("#delete-btn");
let plusBtn = document.querySelector("#plus-btn");
let minusBtn = document.querySelector("#minus-btn");
let multBtn = document.querySelector("#mult-btn");
let divBtn = document.querySelector("#div-btn");
let equalBtn = document.querySelector("#equal-btn");
//      Display
let display = document.querySelector(".display");

// Mathematical functions
function addition(value1, value2) {
  let additionTotal = value1 + value2;
  return additionTotal;
}

function subtraction(value1, value2) {
  let subtractionTotal = value1 - value2;
  return subtractionTotal;
}

function multiplication(value1, value2) {
  let multiplicationTotal = value1 * value2;
  return multiplicationTotal;
}

function division(value1, value2) {
  let divisionTotal = value1 / value2;
  return divisionTotal;
}

// OPERATE function
function operate(operator, value1, value2) {
  if (operator === "add") {
    equalBtn.addEventListener("click", function () {
      addition(value1, value2);
    });
  } else if (operator === "subtract") {
    equalBtn.addEventListener("click", function () {
      subtraction(value1, value2);
    });
  } else if (operator === "multiply") {
    equalBtn.addEventListener("click", function () {
      multiplication(value1, value2);
    });
  } else if (operator === "divide") {
    equalBtn.addEventListener("click", function () {
      division(value1, value2);
    });
  }
}

function testing() {
  console.log("this is a test");
}
