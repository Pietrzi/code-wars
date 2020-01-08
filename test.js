console.log("test");

var findDigit = function(num, nth){
    let n;
    num = num.toString().split("").reverse();
    if (num[num.length-1] === "-") {
        num.pop(num[num.length-1])
    }
    // num.join(""); 
    // else {
    //     n = num.charAt(nth - 1);
    // }
    // for (i = 0; i <= num.length; i++) {
    //     if(num[i] === "-") {
    //         num[i]
    //     }
    // }
    
    // num.split(" ").reverse().join("");
    if (nth -1 > num.length) {
      n = 0;
    } else {
    n = num[nth - 1]
    }
    return n;
}



console.log(findDigit(-5673, 4));