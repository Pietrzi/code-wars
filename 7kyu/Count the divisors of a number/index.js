// Count the number of divisors of a positive integer n.

// divisors(4)  = 3  // 1, 2, 4
// divisors(5)  = 2  // 1, 5
// divisors(12) = 6  // 1, 2, 3, 4, 6, 12
// divisors(30) = 8  // 1, 2, 3, 5, 6, 10, 15, 30


// solutions

// 1

function getDivisorsCnt(n){
    let count = 0;
    for ( i = 0; i <= n; i++) {
    if (n % i === 0) {
      count++
      }
    }
    return count;
}


// 2


function getDivisorsCnt(n) {
    for (let a = 0, i = n; i > 0; i--) {
      if (n % i == 0) a++;
    }
    return a;
}


// 3

function getDivisorsCnt(n){
    var a = 0;
    for (let i = 1; i <= n; i++) {
      if (!(n % i)) a++;
    }
    return a;
}


// 4

