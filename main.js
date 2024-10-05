// initialise global variables
let numberA;
let numberB;
let operator;
let result;
let resultsArea;
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

  resultsArea = document.getElementById("resultsArea");

  resultsArea.textContent = '0';

  const resultBtn = document.getElementById("operate");

  resultBtn.addEventListener("click", () => {
    runCalculation(resultsArea);
  })

  //add a reset function
  const resetBtn = document.getElementById("reset");

  resetBtn.addEventListener("click", () => {
    resetCalculator();
  })


  // add a delete function
  const backspace = document.getElementById("backspace");

  backspace.addEventListener("click", () => {
    numberArray = numberArray.slice(-1);
  })
}

// check which getNumber to run
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

  if (result) {
    numberA = result;
    numberArray = [];
    result = null;
  }

  else if(!numberA) {
    resultsArea.textContent = "select a number";
  }

  else {
  operator = operation.value;
  resultsArea.textContent = numberA + operator;
  numberArray= [];
  }
  
}

//get the second number

function getNumberB(number) {
  numberArray.push(number.value);
  numberB = numberArray.join('');
  numberB = parseFloat(numberB);
  resultsArea.textContent = numberA + operator + numberB;
}

//run the calculation

function runCalculation(resultsArea) {
  if (!numberA) {
    resultsArea.textContent = "Select a number";
  }

   else if (numberB === 0 && operator === "/") {
    resultsArea.textContent = "Bobcat";
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

    resultsArea.textContent = result;
  }


}


function resetCalculator() {
  numberA = null;
  numberB = null;
  result = null;
  operator = null;
  numberArray = [];
  resultsArea.textContent = "0"
}

initCalc();