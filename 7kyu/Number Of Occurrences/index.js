// Write a functionthat returns the number of occurrences of an element in an array.

// var arr = [0, 1, 2, 2, 3];
// arr.numberOfOccurrences(0) === 1;
// arr.numberOfOccurrences(4) === 0;
// arr.numberOfOccurrences(2) === 2;
// arr.numberOfOccurrences("a") === 0;

// solutions

// 1

Array.prototype.numberOfOccurrences = function(num) {
    return this.filter((val) => val == num).length;
}


// 2

Array.prototype.numberOfOccurrences = function (element) {
    let count = 0;
    for (var i = 0; i < this.length; i++) {
        if (this[i] == element) { 
            counter++; 
        }
    }
    return count;
}


// 3

Array.prototype.numberOfOccurrences = function(num) {
    return [...this].filter(val => val === num).length;
}


// 4

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