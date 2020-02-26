// The two oldest ages function/method needs to be completed. 
// It should take an array of numbers as its argument 
// and return the two highest numbers within the array. 
// The returned value should be an array in the format [second oldest age, oldest age].

// The order of the numbers passed in could be any order. The array will always include at least 2 items.

// For example:

// twoOldestAges( [1, 2, 10, 8] ) // should return [8, 10]

// solutions 


// 1

function twoOldestAges(ages){
    let arr = [];
    let sorted = ages.sort((a,b) => a + b);
    arr.push(sorted[0]);
    arr.push(sorted[1]);
    return arr;
}


// 2

const twoOldestAges = (ages) => ages.sort((a, b) => a - b).slice(-2);


// 3

function twoOldestAges(ages){
ages.sort(function(a, b) {
    return a - b;
  });
    let oldest = ages.pop();
    let secondOldest = ages.pop();
    return [secondOldest,oldest];
}