// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. 
// First argument is an array of numbers and the second is the divisor.

// divisibleBy([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6]

// solutions


// 1

function divisibleBy(numbers, divisor){
    let arr = [];
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % divisor === 0) {
        arr.push(numbers[i]);
      }
    }
    return arr;
}

// 2

function divisibleBy(numbers, divisor) {
    return numbers.filter(n => n % divisor === 0)
}


// 3

const divisibleBy = (numbers, divisor) => numbers.filter(number => !(number % divisor));