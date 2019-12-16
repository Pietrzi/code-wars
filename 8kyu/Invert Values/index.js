// Given a set of numbers, return the additive inverse of each.
// Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []

// solutions

// 1

function invert(array) {

    var newArray = [];
    
    array.forEach(n => {
        newArray.push(n - (n*2));
        });

        return newArray;
}

// 2

function invert(array) {
    return array.map( x => x === 0 ? x : -x);
 }

 // 3

 function invert(array) {
    return array.map(i => 0 - i);
 }

 // 4 

 function invert(array) {
    var newArr = [];
    for(var i = 0; i < array.length; i++){
      newArr.push(-array[i]);
    }
     return newArr;
  }

  // 5

  function invert(array) {
    return array.map(n => n && -n)
 }

 // 6

 const invert = array => array.map(num => -num);