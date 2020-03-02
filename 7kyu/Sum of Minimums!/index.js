// Given a 2D array of size m * n. Your task is to find the sum of minimum value in each row.

// [
//   [1, 2, 3, 4, 5],       // minimum value of row is 1
//   [5, 6, 7, 8, 9],       // minimum value of row is 5
//   [20, 21, 34, 56, 100]  // minimum value of row is 20
// ]

// solutions


// 1

function sumOfMinimums(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++){
     total += Math.min(...arr[i])
    }
    
    return total;
}


// 2

const sumOfMinimums = arr => arr.reduce((a, b) => a + Math.min(...b), 0);


// 3

function sumOfMinimums(arr) {
    let sum = 0;
    let min;
    for(let a = 0; a < arr.length; a++){
      min = arr[a][0];
      for(let b = 0; b < arr[a].length; b++){
        if(arr[a][b] < min){min = arr[a][b];}
      }
      sum += min;
    }
    return sum;
}


// 4

function sumOfMinimums(arr) {
    let sum = 0;
      arr.forEach(array => {
      sum += Math.min(...array);
      });
    return sum;
}