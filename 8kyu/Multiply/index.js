// The code does not execute properly. Try to figure out why.

// solutions

// 1

multiply = function (a, b) {
    return a * b;
}


// 2

function multiply(a, b){
    if (!a || !b || typeof(a) != "number" || typeof(b) != "number") {
      return 0;
    }
    return a * b;
}


// 3

const multiply = (a, b) => a * b;


// 4

function multiply(a, b){
    if (isNaN(a) || isNaN(b)) throw "wrong arguments";
    return a * b;
}