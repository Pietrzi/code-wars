

// solutions


// 1

function cubeOdd(arr) {
    let sum = 0;
       const check = function findOdd(num) {
           if (num% 2 !== 0) {
               return num;
           } else {
               return undefined;
           }
       }
       for (i = 0; i < arr.length; i++) {
           if (typeof arr[i] !== "number") {
               return undefined;
           } else if (check(arr[i]) !== undefined){
               sum += Math.pow(arr[i], 3);
           } 
       }
   return sum;
}


// 2

function cubeOdd(arr) {
    arr = arr.filter((num) => {return num % 2 != 0});
    arr = arr.reduce((a, b) => a + Math.pow(b, 3), 0);
    return isNaN(arr) ? undefined : arr;
}


// 3

const cubeOdd = arr => arr.some(a => +a !== a) ? undefined : arr.filter(e => e % 2 != 0).reduce((a, b) => a+b**3, 0);


// 4

function cubeOdd(arr) {
    let sum = 0
    for (const n of arr) {
      if (!Number.isInteger(n)) {
        return undefined
      }
      if (n & 1) {
        sum += n * n * n
      }
    }
    return sum
}

// 5

const cubeOdd = (arr) => {
    if (arr.filter(isNaN).length > 0) { return undefined };
    return arr.reduce((total, num) => (num % 2) ? Math.pow(num, 3) + total : total, 0);
}