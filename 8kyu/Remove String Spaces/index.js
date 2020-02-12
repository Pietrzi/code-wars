// Simple, remove the spaces from the string, then return the resultant string.

// solutions


// 1

function noSpace(x) {
    return x.replace(/\s/g,'');
}


// 2

function noSpace(x) {
    return x.split(' ').join('')
};


// 3

const noSpace = x => x.replace(/ /g, "");


// 4

function noSpace(x){
    var result = ""
    for(var index = 0; index < x.length; index++){
      if(x[index] !== " "){
        result += x[index];
      }
    }
    return result;
}