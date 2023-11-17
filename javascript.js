// Variables

//      Display
let display = document.querySelector(".display");

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

//      Value 1, Value 2, Operator
let value1;
let value2;
let operator = "";
let total;

// Event Listeners
oneBtn.addEventListener("click", () => numberBtns(1));
twoBtn.addEventListener("click", () => numberBtns(2));
threeBtn.addEventListener("click", () => numberBtns(3));
fourBtn.addEventListener("click", () => numberBtns(4));
fiveBtn.addEventListener("click", () => numberBtns(5));
sixBtn.addEventListener("click", () => numberBtns(6));
sevenBtn.addEventListener("click", () => numberBtns(7));
eightBtn.addEventListener("click", () => numberBtns(8));
nineBtn.addEventListener("click", () => numberBtns(9));
zeroBtn.addEventListener("click", () => numberBtns(0));

plusBtn.addEventListener("click", () => operatorBtns("add", "+"));
minusBtn.addEventListener("click", () => operatorBtns("minus", "−"));
multBtn.addEventListener("click", () => operatorBtns("multiply", "×"));
divBtn.addEventListener("click", () => operatorBtns("divide", "÷"));
equalBtn.addEventListener("click", () => operate(operator, value1, value2));

clearBtn.addEventListener("click", () => clear());
deleteBtn.addEventListener("click", () => del());

// Mathematical Functions
function addition(value1, value2) {
  total = value1 + value2;
  equals();
}

function subtraction(value1, value2) {
  total = value1 - value2;
  equals();
}

function multiplication(value1, value2) {
  total = value1 * value2;
  equals();
}

function division(value1, value2) {
  if (value2 === 0) {
    alert("You can't divide by 0!");
  } else {
    total = value1 / value2;
    equals();
  }
}

// Button Functions
function numberBtns(value) {
  if (
    display.textContent === "0" ||
    display.textContent === "+" ||
    display.textContent === "−" ||
    display.textContent === "×" ||
    display.textContent === "÷"
  ) {
    display.textContent = value;
  } else {
    display.textContent = `${display.textContent}${value}`;
  }
}

function operatorBtns(opName, opSymbol) {
  operator = opName;
  display.textContent = opSymbol;
}

function clear() {
  display.textContent = "0";
  value1 = "";
  value2 = "";
  operator = "";
}

function del() {
  display.textContent = display.textContent.slice(0, -1);
}

function operate(operator, value1, value2) {
  if (operator === "add") {
    return addition(value1, value2);
  } else if (operator === "subtract") {
    return subtraction(value1, value2);
  } else if (operator === "multiply") {
    return multiplication(value1, value2);
  } else if (operator === "divide") {
    return division(value1, value2);
  }
}

function equals() {
  display.textContent = total;
  return (value1 = total);
}

// Values

// If display = "" or "0", start value1 until an operator button is pushed. Once you hit "=", total = value1
//Anything after an operator is pushed is value2
