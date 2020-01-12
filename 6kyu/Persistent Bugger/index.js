// Write a function, persistence, that takes in a positive parameter num 
// and returns its multiplicative persistence, which is the number of times 
// you must multiply the digits in num until you reach a single digit.

// solutions

// 1

function persistence(num) {
    var x = 0;
    num = num.toString();
    while (num.length > 1) {
      x++;
      num = num.split('').map(Number).reduce((a, b) => a * b).toString();
    } return x;
}


// 2

const persistence = num => `${num}`.length > 1 ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * +b)) : 0;


// 3

function persistence(num) {
    var digits = (""+num).split("")
    var total;
    var sum = 0;
    while (digits.length > 1) {
        digits = eval(digits.join('*'));
        digits = (""+digits).split("");
        sum++
    }
    return sum;
}