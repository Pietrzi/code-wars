// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// solutions


// 1

function findShort(s){
    return Math.min(...s.split(' ').map(el => el.length));
}


// 2

function findShort(s){
    let arr = s.split(' ');
    let smallest = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if(arr[i].length < smallest.length){
        smallest = arr[i];
      }
    }
    return smallest.length;
}


// 3

function findShort(s) {
    return s.split(' ').reduce((a, b) => Math.min(a, b.length), Infinity);
}



// 4

const findShort = (s) => s.split(' ').sort((a, b) => b.length - a.length).pop().length;


// 5

function findShort(s){
    return Math.min(...s.split(/\s/).map((w) => w.length));
}