import Calculator from "./models/Calculator";
import Printer from "./models/Printer";

const calculatorForm = document.getElementById("js-rest-calculator");
calculatorForm.addEventListener("submit", handleCalculateSubmit);

function handleCalculateSubmit(e) {
  e.preventDefault();
  const sum = calculatorForm.querySelector("#sum");
  const price = calculatorForm.querySelector("#price");

  const rest = calculateRest(sum.value, price.value);
  printRest(rest);
}

function calculateRest(sum, price) {
  return new Calculator().calculateRest(sum, price);
}

function printRest(rest) {
  const previewElement = document.getElementById("js-result");
  new Printer(previewElement, genereMessageWithRest(rest)).print();
}

function genereMessageWithRest(rest) {
  const isInt = rest % 1 === 0;
  const dollarsNaming = parseInt(rest) === 1 ? "dollar" : "dollars";
  if (isInt) {
    return `Your rest is ${rest} ${dollarsNaming}`;
  } else {
    const decimalNumbers = getDecimalNumbers(rest);
    const integer = parseInt(rest);
    return `Your rest is ${integer} ${dollarsNaming} and ${decimalNumbers} cents`;
  }
}

function getDecimalNumbers(number) {
  return number.toFixed(2).toString().split(".")[1];
}
