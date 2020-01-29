function search(budget, prices) {
  return prices.filter(a => a <= budget).toString();
  // return array of prices that are within budget
  
  }
console.log(search())