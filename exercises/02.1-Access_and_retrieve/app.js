// Declaring the array
let myArray = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];

// 1. print the 3rd item here
console.log(myArray[2])
// 2. change the 'thursday' value to null here
myArray[myArray.findIndex((value) => value == 'thursday')] = null
// 3. print the position of step 2
console.log(myArray[myArray.findIndex((value) => value == null)])