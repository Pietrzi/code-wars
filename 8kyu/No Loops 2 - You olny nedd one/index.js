// * No Loops Allowed *

// You will be given an array (a) and a value (x). 
// All you need to do is check whether the provided array contains the value, without using a loop.

// Array can contain numbers or strings. X can be either. 
// Return true if the array contains the value, false if not. With strings you will need to account for case.

// solutions 


// 1

function check(a,x){
    return a.includes(x);
};


// 2

const check = (a,x) => a.includes(x);


// 3

const check = (a,x) => a.indexOf(x) >= 0


// 4

const check=(a,x) => a.some(v => v == x)


// 5

function check(a,x) {
    var arr = [];
    var foundYa = a.filter(function(i) {
      if(i === x) {
        arr.push(x);
      }
    });
    if(arr.length >= 1) {
      return true;
    } else {
      return false;
    }
};