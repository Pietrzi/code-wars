// Your task is to return the sum of Triangular Numbers up-to-and-including the nth Triangular Number.

// Triangular Number: "any of the series of numbers (1, 3, 6, 10, 15, etc.) 
// obtained by continued summation of the natural numbers 1, 2, 3, 4, 5, etc."

// [01]
// 02 [03]
// 04 05 [06]
// 07 08 09 [10]
// 11 12 13 14 [15]
// 16 17 18 19 20 [21]

//solutions

// 1

function sumTriangularNumbers(n) {
    let sum = 0;
    if (n > 0) {
      for (let i = 1; i <= n; i++){
      sum += (i/2) * (i+1);
    } 
      return sum;
    } else {
      return 0;
    }
}


// 2

function sumTriangularNumbers(n) {
    if  (n < 0){
    return 0;
    }
    else  {
      return n*(n+1)/2 + sumTriangularNumbers(n-1);
    }
}


// 3

function sumTriangularNumbers(n) {
    return n < 0 ? 0 : n * (n + 1) * (n + 2) / 6;
}


// 4 

const sumTriangularNumbers = n => n>0|0 && n++*n++*n/6;


// 5 

function sumTriangularNumbers(n) {
    let sum = 0
    for (let i=0, j=1; i<n; i++, j += i+1) {
      sum += j
    }
    return sum
}


// 6 

function sumTriangularNumbers(n) {
    if(n < 0) {
      return 0;
    } else {
      var count = 0;
      var result = 0;
      for(var i = 0; i < n; i ++) {
        count ++
        result += count
        count += 1 + i
      }
    }
    return result
}