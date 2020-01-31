// Your task is to make two functions, max and min that take 
// a(n) array/vector of integers list as input and outputs, 
// respectively, the largest and lowest number in that array/vector.

// max([4,6,2,1,9,63,-134,566]) returns 566
// min([-52, 56, 30, 29, -54, 0, -110]) returns -110
// max([5]) returns 5
// min([42, 54, 65, 87, 0]) returns 0

// solutions

// 1

var min = function(list){
    list.sort((a, b) => a - b);
    return list[0];
}

var max = function(list){
    list.sort((a, b) => b -a);
    return list[0];
}


// 2

var min = function(list){
    return Math.min.apply(null,list);
}

var max = function(list){
    return Math.max.apply(null,list);
}


// 3

const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);


// 4

var min = function(list){
    var min =list[0];
    for(var i=0; i<list.length; i++){
       var cur = list[i];
       if (cur<min) min=cur;
    }
    return min;
}

var max = function(list){
    var max =list[0];
    for(var i=0; i<list.length; i++){
       var cur = list[i];
       if (cur>max) max=cur;
    }
    return max;
}


// 5

const min = list => list.sort((a, b) => a - b)[0];
const max = list => list.sort((a, b) => b - a)[0];