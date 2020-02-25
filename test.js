function twoOldestAges(ages){
  let arr = [];
  let sorted = ages.sort((a,b) => a + b);
  arr.push(sorted[0]);
  arr.push(sorted[1]);
  return arr;
  }


console.log(twoOldestAges( [1, 2, 10, 8] ));

