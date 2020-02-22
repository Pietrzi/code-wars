function maxMultiple(divisor, bound){
  let arr =[];
  for(let i = 1; i <= bound; i++) {
    if(i % divisor === 0) {
      arr.push(i);
    }
  } 
  return arr;
}


console.log(maxMultiple(2, 7));

