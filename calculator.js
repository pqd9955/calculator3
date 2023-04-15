let currentNumber = "";
let previousNumber = "";
let operation = null;
let result = null;

function updateDisplay(value) {
  document.getElementById("display").value = value;
}

function handleClick(value) {
  if (!isNaN(value)) {
    currentNumber += value;
    updateDisplay(currentNumber);
  } else {
    switch (value) {
      case "+":
      case "-":
      case "*":
      case "/":
        if (!result) {
          result = Number(currentNumber);
        } else {
          previousNumber = currentNumber;
          calculate();
        }
        operation = value;
        currentNumber = "";
        break;
      case "=":
        if (operation && currentNumber) {
          previousNumber = currentNumber;
          calculate();
        }
        break;
      case "C":
        clearDisplay();
        break;
    }
  }
}

function calculate() {
  let num1 = parseFloat(previousNumber);
  let num2 = parseFloat(currentNumber);
  switch (operation) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
  }
  updateDisplay(result);
  operation = null;
  previousNumber = "";
  currentNumber = result.toString();
}

function clearDisplay() {
  currentNumber = "";
  previousNumber = "";
  operation = null;
  result = null;
  updateDisplay("0");
}
