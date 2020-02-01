function digitize(n) {
  return n.toString().split("").reverse().map(el => parseInt(el, 10));
}


console.log(digitize(35231));

