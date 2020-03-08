// Write a small function that returns the values of an array that are not odd.
// All values in the array will be integers.
// Return the good values in the order they are given.

// solutions

// 1

function noOdds( values ){
    return values.filter(value => value % 2 === 0);
}


// 2

const noOdds = values => values.filter(value => value % 2 === 0);


// 3

function noOdds( values ){
    let arr = [];
    for(let i = 0; i < values.length; i++){
        if(values[i]%2 == 0){
          arr.push(values[i]);
        }
    }
    
    return arr;
}


// 4

function noOdds( values ){
    return values.join('').match(/[24680]+/gm).map(Number)
}