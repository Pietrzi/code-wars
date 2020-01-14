// function solve(s) {
//   // const split = s.replace(/[aeiou]/gi, ' ').split('');
//   // const final = [];

//   // for (i =0; i < split.length; i++) {
//   //   const arr = split[i];
//   //   if (arr.length) {
//   //     final.push(values(arr))
//   //   }
//   // }
//   // return Math.max(...final);
//   const split = s.replace(/[aeiou]/gi, ' ').split(" ");
//   let values = [];
  
//   for (let i = 0; i < split.length; i++) {
//     const part = split[i];
//     if (part.length) {
//     values.push(values(part))
//     }
//   }
//   return Math.max(...values)
// };

// const values = (str) => {
//   // const alphabet = ' abcdefghijklmnoprstuvwxyz'.split('');
//   // if (x.length === 1) {
//   //   return alphabet.indexOf(x);
//   // }
//   // let splited = x.split('');
//   // let arr = splited.map(el => {
//   //   return alphabet.indexOf(el)
//   // })
//   // return arr.reduce((a, b) => a +b)
//   const alphabet = ' abcdefghijklmnopqrstuvwxyz'.split('');
//   if (str.length === 1) return alphabet.indexOf(str)
//   let split = str.split('');
//   let values = split.map((letter) => {
//     return alphabet.indexOf(letter)
//   })
//   return values.reduce((a, b) => a + b)
// }

solve = (s) => {
  const split = s.replace(/[aeiou]/gi, ' ').split(" ");
  let final = [];
  for (let i = 0; i < split.length; i++) {
    const arr = split[i];
    if (arr.length) {
    final.push(values(arr))
    }
  }
  return Math.max(...final)
}

values = (x) => {
  const alphabet = ' abcdefghijklmnopqrstuvwxyz'.split('');
  if (x.length === 1) return alphabet.indexOf(x)
  let splited = x.split('');
  let arr = splited.map(el => {
    return alphabet.indexOf(el)
  })
  return arr.reduce((a, b) => a + b)
}


console.log(solve("strength"))