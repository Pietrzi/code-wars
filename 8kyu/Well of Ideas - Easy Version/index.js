// In this kata you need to check the provided array (x) for good ideas 'good' 
// and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', 
// if there are more than 2 return 'I smell a series!'. If there are no good ideas, 
// as is often the case, return 'Fail!'.

// solutions


// 1

function well(x){
    let good = 0;
    for (let i = 0; i < x.length; i++) {
      x[i] === 'good' ? good++ : null;
    }
    if (good > 2) {
      return "I smell a series!";
    } else if (good > 0 && good <= 2) {
      return "Publish!";
    } else {
      return "Fail!";
    }
}


// 2

function well(x) {
    switch (x.filter(i => i === 'good').length) {
      case 0:
        return 'Fail!'
      case 1:
      case 2:
        return 'Publish!'
      default:
        return 'I smell a series!'
    } 
}


// 3

const well = x => x.includes('good') ? x.filter(a => a == 'good').length < 3 ? 'Publish!' : 'I smell a series!' : 'Fail!';


// 4

const  well = x => {
    let count = x.filter(a => a == 'good').length
    return  count > 2 ? 'I smell a series!' : count > 0 ? 'Publish!' : 'Fail!'; 
}