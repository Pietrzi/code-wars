// Your task is to write function findSum.
// Upto and including n, this function will return the sum of all multiples of 3 and 5.
// For example:
// findSum(5) should return 8 (3 + 5)
// findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)


// solutions


// 1 

function findSum(n) {
    const arr = [];
    for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        arr.push(i);
      }
    }
      return arr.reduce((a,b) => a+b, 0);
}


// 2

function findSum(n) {
    let arr = 0;
    for (let i = 0; i <= n; i += 1) {
      if (i % 3 ===0 || i % 5 === 0) arr += i
    }
    return arr
}


// 3

function findSum(n) {
    return Array.from({length: n}, (a, b) => b+1)
      .reduce(function(curSum, val) {
        return !(val % 5 && val % 3) ? curSum + val : curSum;
      }, 0)
}


// 4

function findSum(n) {
    if (n < 3) return 0
    return (n % 3 === 0 || n % 5 === 0) ? n + findSum(n-1) : findSum(n-1)
}


// 5 

const findSum = n => Array(n+1).fill().map((a, i)=>i).reduce((a, b)=>(b % 3== 0 || b % 5 == 0) ? a + b : a + 0);


// 6

function findSum(n) {
    var sum = 0;
    for (var i = 0; i <= n/5; i++) {sum += i * 5;}
    for (var i = 0; i <= n/3; i++) {sum += i * 3;}
    for (var i = 0; i <= n/15; i++) {sum -= i * 15;}
      return sum;
}