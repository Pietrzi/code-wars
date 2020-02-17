// Given a list of digits, return the smallest number that could be formed from these digits, 
// using the digits only once (ignore duplicates).

// Notes:
// Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
// Input >> Output Examples
// minValue ({1, 3, 1})  ==> return (13)

// solutions


// 1

function minValue(values){
    return Number([...new Set(values)].sort().join(''));
}


// 2

function minValue(values){
    let arr = Array.from(new Set(values))
    return parseInt(arr.sort().join(''))
}


// 3

function minValue(values){
    let result = [];
    values.forEach(n => {
      if (result.indexOf(n) < 0) {
        result.push(n);
      }
      return result;
    });
    let str = ""
    result.sort().forEach(n => {
      str = str + n;
      return str;
    });
    return Number(str);
}