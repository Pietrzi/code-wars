// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. 
// You will be passed a string and you must return that string 
// in an array where an uppercase letter is a person standing up.

// 1.  The input string will always be lower case but maybe empty.
// 2.  If the character in the string is whitespace then pass over it as if it was an empty seat.

// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]


// solutions

// 1

function wave(str){
    let finalArray = []
  for ( let i = 0; i < str.length; i++) {
      let arr = str.split('')
      if (arr[i] === ' ') {
         continue;
      }
      arr[i] = arr[i].toUpperCase()
      finalArray.push(arr.join(''))
  }
      return finalArray
}


// 2

function wave(str) {
    return str.split('').map((l, i, a) => {
      let c = a.slice();
      c[i] = c[i].toUpperCase();
      return c.join('');
    }).filter((w, i) => w[i] !== ' ');
}


// 3

function wave(str){
    // Code here
    let w=[]
    for(let i=0;i<str.length;i++){
      w.push(str.substring(0,i)+str.charAt(i).toUpperCase()+str.slice(i+1))
  
    }
    return w.filter(x=>x!=str);
}


// 4

const wave = str => [...str].map((a,i) => str.slice(0,i) + a.toUpperCase() + str.slice(i+1)).filter(a => a != str)


// 5

const wave = str => 
  [...str].map((s, i) => 
      str.slice(0, i) + s.toUpperCase() + str.slice(i + 1) 
  ).filter(x => x != str);