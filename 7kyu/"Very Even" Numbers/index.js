// Write a function that returns true if the number is a "Very Even" number.
// If a number is a single digit, then it is simply "Very Even" if it itself is even.
// If it has 2 or more digits, it is "Very Even" if the sum of it's digits is "Very Even".

// input(88) => returns false -> 8 + 8 = 16 -> 1 + 6 = 7 => 7 is odd 
// input(222) => returns true
// input(5) => returns false

// solutions


// 1

function isVeryEvenNumber(n) {
    if (n < 10 && n % 2 === 0) {
      return true;
    }
    return (n > 9) ? isVeryEvenNumber(String(n).split('').reduce((a,b) => +a + +b)) : false;
}


// 2

function isVeryEvenNumber(n) {
    while (n.toString().length > 1) {
      let array = n.toString().split('')
      n = array.reduce((a, b) => Number(a) + Number(b), 0)
    }
    if (!(n % 2 === 0)) {
      return false;
    }
    return true;
}


// 3

function noBoringZeros(n) {
    return !n-- || n % 9 % 2 === 1;
}


// 4

function isVeryEvenNumber(n) {
    let val = n.toString();
    let s = 0;
    if(val.length === 1){
        return n % 2 == 0 ? true : false;
    }else{
        let arr = val.split("");
        arr.map((el) => {s+= parseInt(el)});
        return isVeryEvenNumber(s);
    }
}