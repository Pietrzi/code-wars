// In this little assignment you are given a string of space separated numbers,
// and have to return the highest and lowest number.

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

//solutions

// 1

function highAndLow(numbers){
    const sorted = numbers.split(' ').sort((a, b) => b - a);
    return `${sorted[0]} ${sorted[sorted.length -1]}`;
  }


// 2 

function highAndLow(numbers){
    numbers = numbers.split(' ').map(Number);
    return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
  }


// 3

function highAndLow(numbers){
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
  }


// 4

function highAndLow(numbers){
    var numArray = numbers.split(" ");
    var max      = Number(numArray[0]);
    var min      = Number(numArray[0]);
    var num;
    for(var i = 1; i< numArray.length; i++){
      num = Number(numArray[i]);
      if(num > max) max = num;
      if(num < min) min = num;
    }
    return max + " " + min; 
}


// 5 

function highAndLow(numbers) {
    numbers = numbers.split(' ').map(Number);
    const max = Math.max(...numbers);
    const min = Math.min(...numbers);
    return `${max} ${min}`;
  }
    