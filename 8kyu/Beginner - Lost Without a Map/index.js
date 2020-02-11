// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

// For the beginner, try to use the map method - 
// it comes in very handy quite a lot so is a good one to know.

// solutions


// 1

function maps(x){
    return x.map( el => el * 2);
}


// 2

const maps = x => x.map(el => el * 2);


// 3

function maps(x){
    var newArr = [];
    x.map(function(y){
      newArr.push(y*2);
  });
  
  return newArr;
}


// 4

function maps(x){
    var arr = [];
    for(let i = 0; i < x.length; i++){
      arr[i] = (x[i]+x[i]);
    }
    return arr;
}