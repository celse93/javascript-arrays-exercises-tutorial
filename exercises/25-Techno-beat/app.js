// Your code here
function lyricsGenerator(array) {
    let beat = "";
    let counter = 0;

    for(let item of array) {
        if (item == 0) {
            beat += 'Boom ';
        }
        if (item == 1) {
            beat += 'Drop the bass ';
            counter++;
            beat += counter == 3 ? '!!!Break the bass!!! ' : "";
        }
    }
    return beat;
}

// Don't change anything below this line
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))
