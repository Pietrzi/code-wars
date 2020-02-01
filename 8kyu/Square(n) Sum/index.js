// Complete the square sum function so that it squares each 
// passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// solutions

// 1

function squareSum(numbers){
    let arr =[];
    for (let i = 0; i < numbers.length; i++) {
      arr.push(numbers[i] * numbers[i])
    }
    return arr.length > 1 ? arr.reduce((a, b) => a + b) : 0
}

 
// 2

const squareSum = numbers => numbers.length > 1 ? numbers.map(el => el * el).reduce((a, b) => a + b) : 0;


// 3

function squareSum(numbers){
    return numbers.reduce(function(sum, n){
      return (n*n) + sum;
    }, 0)
}


// 4

function squareSum(numbers) { 
  var totalSum = 0;
  for (i=0;i<numbers.length;i++) {
    totalSum += Math.pow(numbers[i], 2);
  }
  return totalSum;
}


// 5

let squareSum = numbers => numbers.reduce((a, b) => a + b * b, 0);