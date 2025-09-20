const convertToCelsius = function(fahrenheit) {
  const celsius=Number(((fahrenheit-32)*5/9).toFixed(1)) 
  return celsius
};

const convertToFahrenheit = function(celsius) {
  const fahrenheit=Number(((celsius*(9/5))+32).toFixed(1))
  return fahrenheit
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
