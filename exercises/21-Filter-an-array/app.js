let allNames = ["Romario", "Boby", "Roosevelt", "Emiliy", "Michael", "Greta", "Patricia", "Danzalee"];

// Your code here
/*
let resultingNames = [];

resultingNames = allNames.filter(nameWithR)

function nameWithR(array) {
    for(let value of array) {
        if(value[0]=="R") return value
    }
}
    */

/*
let resultingNames = [];

resultingNames = allNames.filter(value => value[0]=="R" ? value : "");
*/

/*
let resultingNames = [];

for(let value of allNames) {
    if(value[0]=="R") resultingNames.push(value)
}
    */

let resultingNames = []; 
resultingNames = allNames.filter(value => value[0]=="R")


console.log(resultingNames);
