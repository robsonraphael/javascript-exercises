const fibonacci = function (num) {
   let fibo = [1]
   for (let i = 1; i < num; i++){
      fibo.push(i)
   }
   console.log(fibo)
};
fibonacci(6);
// Do not edit below this line
module.exports = fibonacci;
