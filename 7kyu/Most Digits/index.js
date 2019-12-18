// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

// solutions

// 1

const numberLength = number => `${number}`.length
const findLongest = array => {
  const numberLengths = array.map(number => numberLength(number))
  const biggestLength = Math.max(...numberLengths)
  const firstBiggest = array.find(num => numberLength(num) === biggestLength)
  return firstBiggest
}


// 2

const findLongest = l => l.reduce((a, b) => (`${b}`.length > `${a}`.length) ? b : a);


// 3


function findLongest(array){
    return array.reduce((res, curr) => (String(res).length < String(curr).length) ? curr : res);
  }


// 4


function findLongest(array){
    let num = '0';
    for(let i=0; i<array.length; i++) {
      let string = array[i].toString();
      if(string.length > num.length) {
        num = string;
      }
    }
    return parseInt(num);
  }


  function findLongest(array){
    var newArr = array.map(function(element) {
      return element.toString()
    })
    newArr.sort(function(a,b) {
      return b.length - a.length
    })
    return parseInt(newArr[0])
    }


// 6


findLongest = arr => arr.sort((a,b) => (b+'').length - (a+'').length)[0]