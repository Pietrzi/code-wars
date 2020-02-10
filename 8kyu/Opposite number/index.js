// Very simple, given a number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34

// solutions


// 1

function opposite(number) {
    return -number
}


// 2

const opposite = number => -number;


// 3

function opposite(n) {
    return n-n*2;
}


// 4

function opposite(number) {
    return number * (-1);
}