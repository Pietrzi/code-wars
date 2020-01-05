// Complete the function that accepts a string parameter,
// and reverses each word in the string. All spaces in the string should be retained.

// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"


// solutions 

// 1

function reverseWords(str) {
    return str.split("").reverse().join("").split(" ").reverse().join(" ");
}


// 2

function reverseWords(str) {
    return str.split(' ').map(function(a){
      return a.split('').reverse().join('');
    }).join(' ');
}


// 3

const reverseWords = str => str.split(" ").map(a => a.split("").reverse().join("")).join(" ");


// 4

function reverseWords(str) {
    var newStr = "";
    for (var i = str.length - 1; i >= 0; i--) {
      newStr += str[i];
    }
    return newStr.split(" ").reverse().join(" ");
}