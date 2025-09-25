const add = function(a,b) {
	return a+b
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(nums) {
  if(nums.length==0){
    return 0
  }

	return nums.reduce((s,num)=>s+num)
};

const multiply = function(nums) {
    return nums.reduce((m,num)=>m*num)
};

const power = function(a,b) {
	return Math.pow(a,b)
};

const factorial = function(num) {
	let fact=1
  for(let i=1;i<=num;i++){
    fact*=i
  }
  return fact
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
