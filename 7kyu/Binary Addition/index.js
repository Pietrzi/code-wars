// Implement a function that adds two numbers together and returns their sum in binary. 
// The conversion can be done before, or after the addition.

// The binary number returned should be a string.


// solutions


// 1

function addBinary(a,b){
    return (a+b).toString(2)
  }


// 2

function addBinary( a, b ){
    let sum    = a + b,
        binary = '';
    while ( sum > 0 ) {
      binary = ( sum % 2 ) + binary;
      sum    = Math.floor( sum / 2 );
    }
  return binary;
  }


// 3

const addBinary = (a, b) => (a + b).toString(2);


// 4

function addBinary(a,b) {
    var c = a + b;
    var res = '';
    while (c >= 1) {
      var res = c % 2 + res;
      c = Math.floor(c / 2);
    }
    return res;
  }


// 5

function addBinary(a,b){
    var added = a + b;  
    var binary =  added.toString(2);
    return binary;
  }