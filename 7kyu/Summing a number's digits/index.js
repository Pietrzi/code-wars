// Write a function named sumDigits which takes a number as input
// and returns the sum of the absolute value of each of the number's decimal digits. For example:


// sumDigits(10);  // Returns 1
// sumDigits(99);  // Returns 18
// sumDigits(-32); // Returns 5

//solutions


// 1

function sumDigits(number) {
    return number.toString().split("").map(Number).filter(Boolean).reduce((a,b) => a+b, 0);
  }


// 2

function sumDigits(number) {
    var i = 0;
    var sum = 0;
    number = Math.abs(number)
    while(number != 0)
    {
        sum += number % 10
        number = Math.floor(number/10)
    }
    return sum
}


// 3

function sumDigits(number) {
    return Math.abs(number).toString().split('').reduce(function(a,b){return +a + +b}, 0);
  }


// 4

sumDigits = n => Math.abs(n).toString().split('').reduce((s, e) => s + +e, 0);


// 5 

const sumDigits = number => String(number).replace('-', '').split('').reduce((prev, curr) => prev + Number(curr), 0);
