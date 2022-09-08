const add = function(i, j) {
	return i+j;
};

const subtract = function(i, j) {
	return i-j;
};

const sum = function(r) {
  return r.reduce((accumulator, curr) => accumulator + curr, 0);
};

const multiply = function(ar) {
  return ar.length
      ? ar.reduce((accumulator, nextItem) => accumulator * nextItem)
      : 0;
  
};

const power = function(x, y) {
  return Math.pow(x,y)
};

const factorial = function(n) {
  let result = n;
  if (n === 0 || n === 1){
    return 1;
  }
  else if (n > 1) {
    while (n > 1) {
    n--;
    result *= n;
  }
return result;}
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
