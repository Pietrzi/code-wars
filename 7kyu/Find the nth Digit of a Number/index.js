// Complete the function that takes two numbers as input, 
// num and nth and return the nth digit of num (counting from right to left).

// If num is negative, ignore its sign and treat it as a positive value
// If nth is not positive, return -1
// Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0

// findDigit(5673, 4)     returns 5
// findDigit(129, 2)      returns 2
// findDigit(-2825, 3)    returns 8
// findDigit(-456, 4)     returns 0
// findDigit(0, 20)       returns 0
// findDigit(65, 0)       returns -1
// findDigit(24, -8)      returns -1

// solutions

// 1

var findDigit = function(num, nth){
    if(nth <= 0)
      return -1;
    let x = Math.abs(num);
    for (let i = 1; i < nth; i++){
      x = Math.floor(x/10);
    }
    return x % 0;
}


// 2

const findDigit = (num, nth) => nth <= 0 ? -1 : Math.trunc(Math.abs(num) / 10 ** (nth - 1)) % 10


// 3

var findDigit = function(num, nth){
    if (nth < 1) return -1;
    if (num < 0) return findDigit(-num, nth);
    if (num == 0) return 0;
    if (nth > 1) return findDigit(Math.floor(num/10), nth - 1);
    return num % 10;
}


// 4

var findDigit = function(num, nth) {
    return --nth < 0 ? -1 : + ('' + Math.abs(num)).split('').reverse()[nth] || 0;
};


// 5

const findDigit = (num, nth) => --nth < 0 ? -1 : 0 | Math.abs(num / 10 ** nth % 10);