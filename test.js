function reverseInvert(array){
  return array.filter(a => a === parseInt(a)).map(el => {
    if (el >= 0) {
      return (''+el).split('').reverse().join('')*-1;
    } else {
      return (''+el).split('').reverse().join('').replace(/-/g, '')*1;
    }
  })
}

console.log(reverseInvert([1,-23,3,4,5]))