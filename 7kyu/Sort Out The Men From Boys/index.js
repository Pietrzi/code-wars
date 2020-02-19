// Given an array/list [] of n integers , 
// Separate The even numbers from the odds , 
// or Separate the men from the boys

// Return an array/list where Even numbers come first then odds
// Since , Men are stronger than Boys , Then Even numbers in ascending order While odds in descending .
// Array/list size is at least *4*** .
// Array/list numbers could be a mixture of positives , negatives .
// Have no fear , It is guaranteed that no Zeroes will exists . !alt
// Repetition of numbers in the array/list could occur , So (duplications are not included when separating).

// solutions


// 1

function menFromBoys(arr){
    let evensArray = []
    let oddsArray = []
    let finalArray = []
     for ( var i = 0; i < arr.length; i++) {
       
       let elem = arr[i]
       if ( elem % 2 === 0) {
         evensArray.push(elem)
       } else {
         oddsArray.push(elem)
       }
     }
    evensArray.sort(function(a, b) { 
       return a - b;
    });
    oddsArray.sort(function(a,b){ 
           return b - a
    })
   finalArray = evensArray.concat(oddsArray) 
   finalArray = finalArray.filter(function(elem,index){ 
     return finalArray.indexOf(elem) === index
   })
    return finalArray
}


// 2

function menFromBoys(arr){
    arr = Array.from(new Set(arr));
    let odd = arr.filter(a => a % 2).sort((a, b) => b - a);
    let even = arr.filter(a => a % 2 === 0).sort((a, b) => a - b);
    return even.concat(odd);
}


// 3

function menFromBoys(arr){
    let men = [];
    let boys = [];
    arr.forEach(a => a % 2 ? men.push(a) : boys.push(a));
    men.sort((a,b) => b - a);
    boys.sort((c,d) => c - d);
    return Array.from(new Set(boys.concat(men)));
}