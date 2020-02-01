// You have to return the digits of this number within an array in reverse order.

// Example: 348597 => [7,9,5,8,4,3]

// solutions 

// 1

function digitize(n) {
    return n.toString().split("").reverse().map(el => parseInt(el, 10));
}


// 2

function digitize(n){
    return (n + '').split('').map(Number).reverse();
}


// 3

function digitize(n) {
    return Array.from(String(n), Number).reverse();
}


// 4

function digitize(n) {
    return String(n).split('').reverse().map(Number)
}


// 5

const digitize = n => n.toString().split("").reverse().map(el => parseInt(el, 10));


// 6

function digitize(n) {
    let numArr = [];
    while(n > 0){
      numArr.push(n % 10);
      n = Math.floor(n/10);
    }
    return numArr;
  }