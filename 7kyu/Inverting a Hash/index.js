// Given a Hash made up of keys and values, invert the hash by swapping them.

// Given:

//   { a: '1',
//     b: '2',
//     c: '3' }

// Return:

//   { 1: 'a',
//     2: 'b',

// solutions

// 1

function invertHash(hash) {
 
    var new_obj = {};
  
    for (var prop in hash) {
      if(hash.hasOwnProperty(prop)) {
        new_obj[hash[prop]] = prop;
      }
    }
  
    return new_obj;
}


// 2

function invertHash(hash) {
    const arr = [];
    for (var key in hash)
    {
      let a = []
      a.push(hash[key],key);
      arr.push(a);
    }
    let b = {}
    for (var i=0; i<arr.length; ++i)
      b[arr[i][0]]=arr[i][1];
    return b;
}


// 3

function invertHash(hash) {
    var object = {};
    Object.entries(hash).map(a => {
     object[a[1]] = a[0];
    });
    return object;
}


// 4

const invertHash = hash => Object.keys(hash).reduce((a, b) => (a[hash[b]] = b, a), {});