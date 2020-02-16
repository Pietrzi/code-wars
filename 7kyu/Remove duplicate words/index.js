// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

// Example:

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// 'alpha beta gamma delta'

// solutions


// 1

function removeDuplicateWords (s) {
    return [...new Set(s.split(' '))].join(' ')
}


// 2

const removeDuplicateWords = s => {
    let arr = s.split(" ");
    let sFiltered = [];
    for (let str of arr) if (!sFiltered.includes(str)) sFiltered.push(str)
    return sFiltered.join(" ")
}


// 3

function removeDuplicateWords (s) {
    let tabs= s.split(' ');
     return tabs.filter((elm,i,tab)=>tab.indexOf(elm)===i).join(' ');
}