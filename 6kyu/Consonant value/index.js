// solutions

// 1

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


// 2

const solve = (s) => {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let arr = [];
    let string = '';
    for (let i = 0; i < s.length + 1; i++) {
        (!(/[aeiou]/.test(s[i]))) ? (string += s[i]) : (arr.push(string), string = '');
    }
    return Math.max.apply(null, (arr.map(el => el.split("").reduce((a, b) => a + (alphabet.indexOf(b) + 1),0)
    )));
};


// 3

solve = s => Math.max(...s.split(/[aeiou]/).map(el => [...el].map(e => e.charCodeAt() - 96).reduce((a, b) => a + b, 0)))


// 4

const solve = (s) =>
  s.split(/[aeiou]+/).map( el => 
    Array.from(el).map( e =>
      e.charCodeAt() - 96
    ).reduce( (a, b) => a + b, 0)
  ).reduce( (a, b) => a > b ? a : b);