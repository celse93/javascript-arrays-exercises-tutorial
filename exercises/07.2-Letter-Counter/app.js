let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// Your code here
par = par.toLowerCase();

for(let i=0; i<par.length; i++) {
    if(!counts[par[i]] && par[i] != " ") {
        counts[par[i]] = 1;
    }
    else if(counts[par[i]] && par[i] != " ") {
        counts[par[i]] += 1
    }
}

console.log(counts);
