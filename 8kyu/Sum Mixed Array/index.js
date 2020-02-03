// Given an array of integers as strings and numbers, 
// return the sum of the array values as if all were numbers.

// Return your answer as a number.

// solutions


// 1

function sumMix(x){
    return x.map(el =>typeof el === "string" ? parseInt(el) : el).reduce((a, b) => a + b)
}


// 2

function sumMix(x){
    return x.map(a => +a).reduce((a, b) => a + b);
}


// 3

function sumMix(x){
    let result = 0;
    for (let n of x) {
      result += parseInt(n);
    }
    return result;
}


// 4

function sumMix(x){
    return eval( x.join("+") )
}


// 5

function sumMix(x) {
    return x.reduce((s, n) => s + Number(n), 0)
}