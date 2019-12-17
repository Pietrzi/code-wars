// Given an array of integers, remove the smallest value. Do not mutate the original array/list.
// If there are multiple elements with the same value, remove the one with a lower index.
// If you get an empty array/list, return an empty array/list.
// Don't change the order of the elements that are left.

// removeSmallest([1,2,3,4,5]) = [2,3,4,5]
// removeSmallest([5,3,2,1,4]) = [5,3,2,4]
// removeSmallest([2,2,1,2,1]) = [2,2,2,1]

//solutions

// 1

function removeSmallest(numbers) {
    let low = {
    'num': Infinity,
    'idx': 0};
    for (let i = 0; i < numbers.length; i++){
      if (numbers[i] < low['num']){
        low['num'] = numbers[i];
        low['idx'] = i;
      }
    }
    
    return numbers.slice(0,low['idx']).concat(numbers.slice(low['idx'] + 1));
  }

// 2

function removeSmallest(numbers) {
    let indexOfMin = numbers.indexOf(Math.min(...numbers));
    return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
  }

// 3

function removeSmallest(numbers) {
    const min = Math.min.apply(this, numbers);
    return numbers.filter((num, idx, arr) => idx !== arr.indexOf(min));
  }

// 4

const removeSmallest = numbers => numbers.filter((n,i) => i !== numbers.indexOf(Math.min(...numbers)));


// 5

function removeSmallest(numbers) {
    var smallest;
    var newNums = [];
    numbers.forEach(function(num) {
      if (smallest > num || smallest === undefined) {
        smallest = num;
      }
    });
    var index = numbers.indexOf(smallest);
    numbers.forEach(function(n, i) {
      if (i !== index) {
        newNums.push(n);
      }
    });
    return newNums;
  }