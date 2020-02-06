// Implement a function named generateRange(min, max, step), 
// which takes three arguments and generates a range of integers from min to max, 
// with the step. The first integer is the minimum value, the second is the maximum 
// of the range and the third is the step. (min < max)

// generateRange(2, 10, 2) // should return array of [2,4,6,8,10]
// generateRange(1, 10, 3) // should return array of [1,4,7,10]


// solutions

// 1

function generateRange(min, max, step){
    let arr = [];
    for (let i = min; i <= max; i += step) {
      arr.push(i);
    }
    return arr;
}


// 2

function generateRange(min, max, step){
    var arr = [];
    while (min <= max) {
      arr.push(min);
      min += step;
    }
    return arr
}


// 3

function generateRange(min, max, step){
    return min > max ? [] : [min, ...generateRange(min + step, max, step)];
}


// 4

const generateRange = (min, max, step) => Array.from(Array((max -min)/step + 1 | 0), (_,i) => min + i * step);