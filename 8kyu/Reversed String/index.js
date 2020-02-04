// Complete the solution so that it reverses the string value passed into it.

// solution('world'); // returns 'dlrow'

// solutions 


// 1

function solution(str){
    return str.split("").reverse().join("");
}


// 2

const solution = str => str.split('').reverse().join('');


// 3

function solution(str){
    let word = '';
    for (var i = str.length - 1; i >= 0; i--)
      word += str[i];
    return word;
}


// 4

const solution = str => [...str].reverse().join('');