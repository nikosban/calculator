// initialise global variables
let numberA = "";
let numberB = "";
let operator;
let result = 0;
let numberArray = [];

//get the result area
const resulstArea = document.getElementById("resultsArea");
resulstArea.textContent = result;

//show the previous operation
const previousOperation = document.getElementById("previousCalc");


//intialise calculator

function initCalc() {

  // get all number buttons
  const numberBtn = Array.from(document.getElementsByClassName("numberBtn"));
  numberBtn.forEach((number) => {
    number.addEventListener("click", () => {
      getNumber(number);
    })
  })

  // get all operator buttons
  const opBtn = Array.from(document.getElementsByClassName("operator"));
  opBtn.forEach((operBtn) => {
    operBtn.addEventListener("click", () => {
      getOperator(operBtn);
    })
  })

  //get the calulate button
  const operate = document.getElementById("operate");
  operate.addEventListener("click", () => {
    calculate();
  })

  //get the backspace button
  const deleteBtn = document.getElementById("backspace");
  deleteBtn.addEventListener("click", () => {
    backspace();
  })

  //get the reset function
  const resetBtn = document.getElementById("reset");
  resetBtn.addEventListener("click", () => {
    reset();
  })

}

// based on the selection order get the number
function getNumber(number) {

  if (!operator) {
    if (number.value === "." && numberA.includes(".")) return;
    numberA += number.value;
    resulstArea.textContent = numberA;
  }

  else {
    if (number.value === "." && numberB.includes(".")) return;
    numberB += number.value;
    resulstArea.textContent = numberA + operator + numberB;
  }

}

//get the operator and chain calculate
function getOperator(operBtn) {

  if (result) {
    numberA = result;
    numberArray = [];
    result = null;
  }

  if(numberA === "") {
    numberA = "0";
    operator = operBtn.value;
    resulstArea.textContent = numberA + operator;
  }

  else {
    operator = operBtn.value;
    resulstArea.textContent = numberA + operator;
  }
  
}

//run the calculation
function calculate() {

  numberA = parseFloat(numberA);
  numberB = parseFloat(numberB);

  if (!numberB) {
    resulstArea.textContent = "You are a donkey"
  }
  
  else {
    switch(operator) {
      case "+":
      result = numberA + numberB;
      break;
      case "-":
      result = numberA - numberB;
      break;
      case "*":
      result = numberA * numberB;
      break;
      case "/":
      result = numberA / numberB;
      break;
      case "%":
      result = numberA % numberB;
      break;
    }

    resulstArea.textContent = result;
    previousOperation.textContent = numberA + operator + numberB;

  }
}

// remove the last number from the string
function backspace() {

  if (numberB !== "") {
    numberB = numberB.slice(0,-1);
    resulstArea.textContent = numberA + operator + numberB;
  }

  else if (operator) {
    operator = null;
    resulstArea.textContent = numberA;
  }

  else {
    numberA = numberA.slice(0,-1);
    resulstArea.textContent = numberA;
  }

}

//reset the calculator
function reset() {
numberA = "";
numberB = "";
operator = null;
result = 0;
numberArray = [];

resulstArea.textContent = result;
}

initCalc();