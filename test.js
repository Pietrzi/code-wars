function persistence(num) {
  var x = 0;
  num = num.toString();
  while (num.length > 1) {
    x++;
    num = num.split('').map(Number).reduce((a, b) => a * b).toString();
  } return x;
}



console.log(persistence(397))