Array.prototype.numberOfOccurrences = function(num) {
  let count = 0;
  if (this.indexOf(num) >= 0) {
    this.forEach(el => {
      if (num == el) {
        count += 1;
      }
    });
  }
  return count;
}


// console.log(nbYear(1500, 5, 100, 5000));
//console.log("click")
