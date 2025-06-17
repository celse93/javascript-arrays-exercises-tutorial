let arrayOfCelsiusValues = [-87, 34, 36, -50];

let arrayOfFahrenheitValues = arrayOfCelsiusValues.map(function(value) {
	
	// Add your code here and return the new value
	return (value*1.8)+32
});

console.log(arrayOfFahrenheitValues);
