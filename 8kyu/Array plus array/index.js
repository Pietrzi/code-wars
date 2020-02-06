// I'm new to coding and now I want to get the sum of two arrays...
// actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

// solutions


// 1

function arrayPlusArray(arr1, arr2) {
    return arr1.reduce((a, b) => a + b) + arr2.reduce((a, b) => a + b); //something went wrong
}


// 2

function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((a, b) => a + b);
}


// 3

function arrayPlusArray(arr1, arr2) {
    let arr = [...arr1, ...arr2];
    return arr.reduce((a, b) => a + b);
}


// 4

const arrayPlusArray = (arr1, arr2) => [...arr1, ...arr2].reduce((a, b) => a + b, 0);


// 5

const arrayPlusArray = (arr1, arr2) => arr1.concat(arr2).reduce((a, b)=> a + b, 0);