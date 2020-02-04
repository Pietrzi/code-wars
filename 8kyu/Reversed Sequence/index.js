// Get the number n (n>0) to return the reversed sequence from n to 1.

// Example : n=5 >> [5,4,3,2,1]

// solutions


// 1

const reverseSeq = n => {
    let arr = [];
    for(let i = n; i > 0; i--) {
      arr.push(i);
    }
      return arr;
};


// 2

const reverseSeq = n => {
    return Array(n).fill(0).map((e, i) => n - i );
};


// 3

const reverseSeq = n => Array.from({n}, () => n--);


// 4

const reverseSeq = num => {
    return new Array(num)
        .fill()
        .map((d, i) => i + 1)
        .reverse()
};