// In this kata you will create a function that takes a list of non-negative integers and strings 
// and returns a new list with the strings filtered out.

// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]


//solutions 

// 1

function filter_list(l) {
    let arr = [];
    for(i=0; i < l.length; i++){
      if(typeof l[i] === 'number'){
        arr.push(l[i]);
      }
    }
    return arr;
}


// 2

const filter_list = l => l.filter(el => typeof el === 'number');


// 3

const filter_list = l => l.filter(Number.isInteger);


// 4

