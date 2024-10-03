// initialise global variables
let numberA;
let numberB;
let operator;
let result;
let numberArray = [];

// initialise the app

function initCalc () {

  // add event listners to the number buttons

   const numberBtn = Array.from(document.getElementsByClassName("numberBtn"));

   numberBtn.forEach((number) => {
    number.addEventListener("click", () => {
      getNumber(number);
    } )
   })

  // add event listeners to the operator buttons

  const operBtn = Array.from(document.getElementsByClassName("operator"));

  operBtn.forEach((operation) => {
    operation.addEventListener("click", () => {
      getOperator(operation);
    })
  })

  // initialise the result with an empty string

  const resultsArea = document.getElementById("resultsArea");

  resultsArea.textContent = '0';

  const resultBtn = document.getElementById("operate");

  resultBtn.addEventListener("click", () => {
    runCalculation();
  })
}

function getNumber(number) {
   if (!operator) {
    getNumberA(number);
   }

   else {
    getNumberB(number);
   }
}


//get the first number

function getNumberA (number) {
  numberArray.push(number.value);
  numberA = numberArray.join('');
  numberA = parseFloat(numberA);
  resultsArea.textContent = numberA;
}

//get the operator

function getOperator(operation) {
  operator = operation.value;
  resultsArea.textContent = numberA + operator;
  numberArray = [];
}

//get the second number

function getNumberB(number) {
  numberArray.push(number.value);
  numberB = numberArray.join('');
  numberB = parseFloat(numberB);
  resultsArea.textContent = numberA + operator + numberB;
}

//run the calculation

function runCalculation() {
  if (!numberA) {
    getNumber(number);
    resultsArea.textContent = "Select a number";
  }

  else {
    switch (operator) {
      case "+":
        result = numberA + numberB;
        break;
      case "-":
        result = numberA - numberB;
        break;
      case "/":
        result = numberA / numberB;
        break;
      case "*":
        result = numberA * numberB;
        break;
      case "%":
        result = numberA % numberB;
        break;
    }
  }

  resultsArea.textContent = result;
}



initCalc();