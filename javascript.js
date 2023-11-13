// Variables
//      Value 1, Value 2, Operator
let value1;
let value2;
let operator;

//      Buttons
let oneBtn = document.querySelector("#one-btn");
oneBtn.addEventListener("click", function () {
  display.textContent = `${display.textContent}1`;
});
let twoBtn = document.querySelector("#two-btn");
twoBtn.addEventListener("click", function () {
  display.textContent = `${display.textContent}2`;
});
let threeBtn = document.querySelector("#three-btn");
threeBtn.addEventListener("click", function () {
  display.textContent = `${display.textContent}3`;
});
let fourBtn = document.querySelector("#four-btn");
fourBtn.addEventListener("click", function () {
  display.textContent = `${display.textContent}4`;
});
let fiveBtn = document.querySelector("#five-btn");
fiveBtn.addEventListener("click", function () {
  display.textContent = `${display.textContent}5`;
});
let sixBtn = document.querySelector("#six-btn");
sixBtn.addEventListener("click", function () {
  display.textContent = `${display.textContent}6`;
});
let sevenBtn = document.querySelector("#seven-btn");
sevenBtn.addEventListener("click", function () {
  display.textContent = `${display.textContent}7`;
});
let eightBtn = document.querySelector("#eight-btn");
eightBtn.addEventListener("click", function () {
  display.textContent = `${display.textContent}8`;
});
let nineBtn = document.querySelector("#nine-btn");
nineBtn.addEventListener("click", function () {
  display.textContent = `${display.textContent}9`;
});
let zeroBtn = document.querySelector("#zero-btn");
zeroBtn.addEventListener("click", function () {
  display.textContent = `${display.textContent}0`;
});
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

// Operators event listeners
plusBtn.addEventListener("click", function () {
  operator = "add";
  display.textContent = `${display.textContent}+`;
});

minusBtn.addEventListener("click", function () {
  operator = "subtract";
  display.textContent = `${display.textContent}−`;
});

multBtn.addEventListener("click", function () {
  operator = "multiply";
  display.textContent = `${display.textContent}×`;
});

divBtn.addEventListener("click", function () {
  operator = "divide";
  display.textContent = `${display.textContent}÷`;
});

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
