function noBoringZeros(n) {
  return !n-- || n % 9 % 2 === 1;
}


console.log(noBoringZeros(22));

