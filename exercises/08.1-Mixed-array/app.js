let mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

// Your code here
let dataArray = [];
for(let i=0; i<mix.length; i++) {
    dataArray.push(typeof mix[i]);
}

console.log(dataArray)