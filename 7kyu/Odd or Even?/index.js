// Given a list of numbers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Example:
// odd_or_even([0])          ==  "even"
// odd_or_even([0, 1, 4])    ==  "odd"
// odd_or_even([0, -1, -5])  ==  "even"

// solutions


// 1

function oddOrEven(array) {
    if (array.length > 1) {
     return array.reduce((a, b) => a + b) % 2 === 0 ? "even" : "odd";
     } else if (array.length === 0) {
     return "even";
     } else {
     return array[0] % 2 === 0 ? "even" : "odd";
     }
}


// 2

function oddOrEven(array) {
    return array.reduce((a, b) => a + b, 0) % 2 ? 'odd' : 'even';
}


// 3

const oddOrEven = array => array.reduce((a, b) => a + b, 0) % 2 === 0 ? 'even' : 'odd';


// 4

function oddOrEven(array) {
    let result = 0;
    for (let i = 0; i < array.length; i++) { 
        result+= array[i];
    }
    if (result % 2 === 0){ 
        return "even";
    } else {
        return "odd";
    }
}