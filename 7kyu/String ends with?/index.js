// Complete the solution so that it returns true if the first argument(string) 
// passed in ends with the 2nd argument (also a string).

// solutions


// 1

function solution(str, ending){
    return str.endsWith(ending);
}


// 2

function solution(str, ending){
    return str.substr(-ending.length) == ending;
}


// 3

function solution(str, ending){
    let end = ending.length;
    let str = str.slice(-end);
    return str.match(ending) ? true : false;
}


// 4

function solution(str, ending) {
    return (new RegExp(`${ending}$`)).test(str);
}


// 5

function solution(str, ending){
    return str.split('').reverse().join('').search(ending.split('').reverse().join('')) === 0;
}
