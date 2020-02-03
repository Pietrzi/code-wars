// Given two numbers x and n, calculate the (positive) nth root of x.

// This means that being r = result, r^n = x; Examples

// root(4, 2);   // 2 (the square root of 4 is 2 , 2^2 = 4);
// root(8, 3);   // 2 (the cube root of 8 is 2   , 2^3 = 8);
// root(256, 4); // 4 (the 4th root of 256 is 4  , 4^4 = 256);
// root(9, 2);   // 3 (the square root of 9 is 3 , 3^2 = 9)

// solutions 

// 1

function root(x, n) {
    return Math.pow(x, 1/n);
}


// 2

function root(x, n) {
    return x ** (1/n)
}


// 3

const root = (x, n) => Math.pow(x, 1 / n);