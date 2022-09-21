const removeFromArray = function (array, element, num1 = 0, num2 = 0, num3 = 0) {
  let newArray = [];
  array.forEach((num) => {
      if (num === element || num === num1 || num === num2 || num === num3) {}
      else {
        newArray.push(num);
      }
  });
  return newArray;
};

// Do nnum1 edit below this line
module.exports = removeFromArray;
