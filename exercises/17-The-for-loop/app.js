let myArray = [2323, 4344, 2325, 324413, 21234, 24531, 2123, 42234, 544, 456, 345, 42, 5445, 23, 5656, 423];

// Your code here
let average = 0;
let total = 0;
for(let value of myArray) {
    total += value;
}

average = total/myArray.length;
console.log(average);