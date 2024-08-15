const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

const decimalToBinary = (input) => {
  const inputs = [];
  const quotients = [];
  const remainders = [];
  
  if (input === 0) {
    result.innerText = "0";
    return;
  }

  while (input > 0) {
    const quotient = Math.floor(input / 2);
    const remainder = input % 2;

    inputs.push(input);
    quotients.push(quotient);
    remainders.push(remainder);
    input = quotient;
  }

  console.log("Inputs: ", inputs);
  console.log("Quotients: ", quotients);
  console.log("Remainders: ", remainders);

  result.innerText = remainders.reverse().join("");
};

const checkUserInput = () => {
  if (
    !numberInput.value ||
    isNaN(parseInt(numberInput.value)) ||
    parseInt(numberInput.value) < 0
  ) {
    alert("Please provide a decimal number greater than or equal to 0");
    return;
  }

  decimalToBinary(parseInt(numberInput.value));
  numberInput.value = "";
};

convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});


/* 
V1 example call stack (non-recursive)
const callStack = [];

const a = () => {
  return "freeCodeCamp " + b();
};

const b = () => {
  return "is " + c();
};

const c = () => {
  return "awesome!";
};

console.log(a());

*/

/*
V2 example callstack (recursive)
const countDownAndUp = (number) => {
  console.log(number);

  if (number === 0) {
    console.log("Reached base case");
    return;
  } else {
    countDownAndUp(number - 1);
    console.log(number);
  }
};

countDownAndUp(3);
*/

/*
Removed Decimal to Binary fucntion. Saved here for version control
const decimalToBinary = (input) => {
  let binary = "";

  if (input === 0) {
    binary = "0";
  }

  while (input > 0) {
    binary = (input % 2) + binary;
    input = Math.floor(input / 2);
  }

  result.innerText = binary;
};
*/

/*
example 
const showAnimation = () => {
  setTimeout(() => {
    console.log("free");
  }, 500);
  setTimeout(() => {
    console.log("Code");
  }, 1000);
  setTimeout(() => {
    console.log("Camp");
  }, 1500);
};
*/
