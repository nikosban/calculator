  let numberA;
  let numberB;
  let operator;
  let result;

const number = document.getElementById("numberBtn");

  number.addEventListener("click", () => {
      numberB = parseFloat(number.value)
      numberA = parseFloat(number.value)
      console.log(numberA);
      console.log(numberB);
  });

const operatorBtn = Array.from(document.getElementsByClassName("operator"));
  
 operatorBtn.forEach((button) => {
    button.addEventListener("click", () => {
         operator = button.value;
         console.log(operator);
    })
 });

 const calc = document.getElementById("operate");

 calc.addEventListener("click", () => {
    operate();
 })


 function operate () {
    if (operator === "+") {
        result = numberA + numberB;
    }

    else if (operator = "/") {
        result = numberA / numberB;
    }
    
    console.log(result);
 }