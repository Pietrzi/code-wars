// Create a function that returns the sum of the two lowest positive numbers 
// given an array of minimum 4 positive integers. 
// No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

// solutions

// 1

function sumTwoSmallestNumbers(numbers) {  
    numbers.sort((a,b) => a - b);
    return numbers[0] + numbers[1];
};


// 2

function sumTwoSmallestNumbers(numbers) {  
    var [ a, b ] = numbers.sort((a, b) => a - b)
    return a + b
}


// 3

function sumTwoSmallestNumbers(numbers) {  
    if (!(numbers instanceof Array) || numbers.length < 4) return;
    let tempArray = [].concat(numbers);
    const [a, b] = tempArray.sort((a, b) => a - b);
    return a + b;
};


// 4

function sumTwoSmallestNumbers(numbers) {
    var min = numbers[0], iMin = 0;
    for(var i = 1; i < numbers.length; i++)
      if(numbers[i] < min) {
        min = numbers[i];
        iMin = i;
      }
    
    var i = iMin == 0 ? 1 : 0;
    var min2 = numbers[i];
    for(i++; i < numbers.length; i++){
      if(i == iMin)
        continue;
      if(numbers[i] < min2)
        min2 = numbers[i];
    }
    
    return min + min2;
};
  