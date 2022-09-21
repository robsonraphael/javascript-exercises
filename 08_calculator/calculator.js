const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (array) {
  let total = 0;
  if (array.length !== 0) {
    array.map((element) => {
      total += element;
    });
  }
  return total;
};

const multiply = function (array) {
  let total = 1;
  array.map((element) => {
    total *= element;
  });
  return total;
};

const power = function (num1, num2) {
  return Math.round(num1 ** num2);
};

const factorial = function (num1) {
  if (num1 > 0) {
    let fat = 1;
    for (let i = 1; i <= num1; i++) {
      fat *= i;
    }
    return fat;
  } else {
    return 1;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
