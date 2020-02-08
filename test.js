function expressionMatter(a, b, c) {
  // if(c > a) {
  //   return (a + b) * c;
  //   } else if (a === 1 && c === 1) {
  //   return a + b + c;
  //   } else {
  //   return a * (b + c);
  //   }
  let arr = [((a + b) * c), (a + b + c), (a * (b + c)), (a * b * c)].sort((a, b) => a - b);
  return arr;
  }


console.log(expressionMatter(3, 5, 7));

