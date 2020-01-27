// Reverse and invert all integer values in a given list.

// solutions

// 1

function reverseInvert(array){
    var newArr=[];
    for (let i = 0; i < array.length; ++i)
      if (typeof array[i] == 'number' && array[i] % 1 == 0)
      {
        var a =Math.abs(array[i]).toString().split('').reverse().join('');
        if (array[i] < 0)
          newArr.push(+a);
        else
          newArr.push(-a);
      }
    return newArr;
}


// 2

function reverseInvert(array){
    return array.filter(a => a === parseInt(a)).map(el => {
      if (el >= 0) {
        return (''+el).split('').reverse().join('')*-1;
      } else {
        return (''+el).split('').reverse().join('').replace(/-/g, '')*1;
      }
    })
}


// 3

function reverseInvert(array) {
    return array
      .filter(n => Number.isInteger(n))
      .map(n => -Math.sign(n) * parseInt(String(n).split("").reverse().join(""), 10))
}

// 4


const invertNumber = n => 
  -Math.sign(n) * parseInt([...`${n}`].reverse().join(''), 10)
  
const reverseInvert = arr => 
  arr
    .filter(Number.isInteger)
    .map(invertNumber)