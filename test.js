function century(year) {
  // if (year.lenght === 4) {
  // return year.slice(2);
  // } else if (year.lengtht === 3) {
  // return year.slice(1);
  // } else {
  // return 1
  // }
  return Number(year.toString().slice(0, 2)) + 1;
}

console.log(century(1879));

