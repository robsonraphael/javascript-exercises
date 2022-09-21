const ftoc = function(grau) {
  let fah = (grau - 32) * 5/9
  return +(fah.toFixed(1))
};

const ctof = function(grau) {
  let cel = (grau * 9/5) + 32
  return +(cel.toFixed(1))
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
