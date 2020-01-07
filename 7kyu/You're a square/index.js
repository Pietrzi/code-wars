// Given an integral number, determine if it's a square number:
// In mathematics, a square number or perfect square is an integer that is the square of an integer; 
// in other words, it is the product of some integer with itself.

// isSquare(-1) returns  false
// isSquare(0) returns   true
// isSquare(3) returns   false
// isSquare(4) returns   true
// isSquare(25) returns  true  
// isSquare(26) returns  false


// solutions 

// 1

var isSquare = function(n){
    if((Math.sqrt(n) % 1) == 0)
      return true;
    else
      return false;
}


// 2

function isSquare(n) {
    return Math.sqrt(n) % 1 === 0;
}


// 3

const isSquare = n => Number.isInteger(Math.sqrt(n));


// 4

const isSquare = n => Math.sqrt(n) % 1 === 0


// 5


var isSquare = function(n){
    return Math.sqrt(n) % 1 === 0 ? true : false;
};