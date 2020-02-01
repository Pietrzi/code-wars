// function squareSum(numbers){
//   let arr =[];
//   for (let i = 0; i < numbers.length; i++) {
//     arr.push(numbers[i] * numbers[i])
//   }
//   return arr.length > 1 ? arr.reduce((a, b) => a + b) : 0
// }

const squareSum = numbers => numbers.length > 1 ? numbers.map(el => el * el).reduce((a, b) => a + b) : 0


console.log(squareSum([0, 3, 4, 5]));

