// Your code here
function matrixBuilder(int) {
    let parentArray=[];
    let childArray=[];
    for(let i=1; i<=int; i++) {
        childArray.push(Math.floor(Math.random()*2))
        parentArray.push(childArray);
    }
    return parentArray;
}


// Do not change anything from this line down
console.log(matrixBuilder(5))
