let listOfNumbers = [4, 80, 85, 59, 37, 25, 5, 64, 66, 81, 20, 64, 41, 22, 76, 76, 55, 96, 2, 68];

// Your code here
function mergeTwoList(array) {
    let odd = [];
    let even = [];
    let mergeArray = [];
    for(let x of array) {
        if(x % 2===0) {
            even.push(x);
        }
        else {
            odd.push(x);
        }
    }
    return mergeArray = odd.concat(even);
}

console.log(mergeTwoList(listOfNumbers));