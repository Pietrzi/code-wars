// Given a Divisor and a Bound , Find the largest integer N , Such That ,
// N is divisible by divisor
// N is less than or equal to bound
// N is greater than 0.

// maxMultiple (2,7) ==> return (6)

// solutions


// 1

function maxMultiple(divisor, bound){
    let arr =[];
    for(let i = 1; i <= bound; i++) {
      if(i % divisor === 0) {
        arr.push(i);
      }
    } 
    return arr[arr.length -1];
}


// 2

const maxMultiple = (divisor,bound) => bound - bound % divisor ;


// 3

function maxMultiple(divisor, bound) {
    return Math.floor(bound / divisor) * divisor;
}


// 4

function maxMultiple(divisor, bound){
    return (bound % divisor === 0) ? bound : maxMultiple(divisor, bound - 1) 
}