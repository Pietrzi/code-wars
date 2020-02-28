// Scenario
// You're saying good-bye your best friend , See you next happy year .

// Happy Year is the year with only distinct digits , (e.g) 2018

// Task
// Given a year, Find The next happy year or The closest year You'll see your best friend !alt !alt

// Notes
// Year Of Course always Positive .
// Have no fear , It is guaranteed that the answer exists .
// It's not necessary that the year passed to the function is Happy one .
// Input Year with in range (1000  ≤  y  ≤  9000)

// solutions


// 1

function nextHappyYear(year){
    let newYear = year + 1
    let arr = newYear.toString().split('') 
    if(arr.join('') === Array.from(new Set(arr)).join('')) return newYear
    else return nextHappyYear(newYear)
}

// 2

const nextHappyYear = year => /(.).*\1/.test(year + 1) ? nextHappyYear(year + 1) : year + 1;


// 3

function nextHappyYear(year){
    while (true) { 
     let isSame = false;
     year++;
     let whole = year.toString();
     let each = whole.split("");
     for (let i = 0; i < each.length; i++) {
       for (let j = i + 1; j < each.length; j++) {
         if(each[i] == each[j]) isSame = true;
       }
     }
     if(!isSame) break;
    } 
    return year;
}


// 4

function nextHappyYear(year){
    do year+=1
    while ((/([0-9]).*?\1/).test(year));
    return year
}