const sumAll = function (num1, num2) {
  let value = 0;
  if (
    num1 < 0 ||
    num2 < 0 ||
    typeof num1 !== "number" ||
    typeof num2 !== "number"
  ) {
    return "ERROR";
  }
  if (num1 > num2) {
    for (i = num2; i <= num1; i++) {
      value += i;
    }
  } else {
    for (i = num1; i <= num2; i++) {
      value += i;
    }
  }
  return value;
};

// Do not edit below this line
module.exports = sumAll;
