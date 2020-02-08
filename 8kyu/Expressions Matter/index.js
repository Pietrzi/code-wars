// Given three integers a ,b ,c, return the largest number obtained after 
// inserting the following operators and brackets: +, *, ().

// Consider an Example :
// With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:

// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
// (1 + 2) * 3 = 9
// So the maximum value that you can obtain is 9.

// solutions

// 1

function expressionMatter(a, b, c) {
    let arr = [((a + b) * c), (a + b + c), (a * (b + c)), (a * b * c)].sort((a, b) => a - b);
    return arr[arr.length-1];
}

// 2

function expressionMatter(a, b, c) {
    return Math.max(
      a + b + c,
      a * b * c,
      a * (b + c),
      (a + b) * c,
      a + b * c,
      a * b + c,
    );
}


// 3

const expressionMatter = (a, b, c) => Math.max(a + b + c, a * (b + c), (a + b) * c, a * b * c);


// 4 this one is insane

function expressionMatter(a, b, c) {
    if(a==1 && b==1 && c==1){
      return 3;
    }
    if(a!=1 && b!=1 && c!=1){
      return a*b*c;
    }
    if(a==1 && b!=1 && c!=1){
      return (a+b)*c
    }
     if(a!=1 && b!=1 && c==1){
      return a*(b+c);
    }
    if(a!=1 && b==1 && c==1){
      return a*2;
    }
    if(a==1 && b==1 && c!=1){
      return c*2;
    }
    if(a==1 && b!=1 && c==1){
      if(a==c){
        return a+b+c;
      }
      if(a>c){
        return a*(b+c);
      }
      if(a<c){
        return (a+b)*c;
      }
    }
    if(a!=1 && b==1 && c!=1){
      if(a==c){
        return (a+b)*c;
      }
      if(a>c){
        return a*(b+c);
      }
      if(a<c){
        return (a+b)*c;
      }
    }
  }