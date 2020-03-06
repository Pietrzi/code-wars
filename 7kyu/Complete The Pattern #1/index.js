// You have to write a function pattern which returns the following
// Pattern(See Pattern & Examples) upto n number of rows.

// Note:Returning the pattern is not the same as Printing the pattern.
// Rules/Note:
// If n < 1 then it should return "" i.e. empty string.
// There are no whitespaces in the pattern.
// Pattern:
// 1
// 22
// 333
// ....
// .....
// nnnnnn

// solutions

// 1

function pattern(n){
    let output="";
      for (let i = 1; i <= n; i++) {
       if (i === n) {
         output += `${String(i).repeat(i)}`
         continue
       }
       output += `${String(i).repeat(i)}\n`
     }
    return output;
}


// 2

function pattern(n) {
    let output = [], i;
    for(let i = 1; i <= n; i++) {
      output.push(Array(i + 1).join(i));
    }
    return output.join('\n');
}


// 3

const pattern = n => Array.from({ length: n }, (_, index) => String(index + 1).repeat(index + 1)).join('\n');


// 4

function pattern(n){
    if (n < 1) return '';
    return [...Array(n)].map((e,i) => (i+1).toString().repeat(i+1)).join('\n');
}