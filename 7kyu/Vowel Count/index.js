

// solutions

// 1

function getCount(str) {
    var vowelsCount = 0;
    const array = str.split("");
    for (let i = 0; i < array.length; i++) {
      if (array[i] == "a" || array[i] == "e" || array[i] == "i" || array[i] == "o" || array[i] == "u") {
        vowelsCount ++;
      }
    }
  
    return vowelsCount;
  }
  

  // 2 

  function getCount(str) {
    var vowelsCount = 0;
    var vowels = ["a","e","i","o","u"];
    for(var i = 0;i < str.length;i++){
      for(var j=0;j<vowels.length;j++){
        if(str[i] === vowels[j]){
          vowelsCount++;
        }
      }
    }
    
    return vowelsCount;
  }


// 3

function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
  }

  
// 4

function getCount(str) {
    return str.replace(/[aeiou]/gi, '').length;
  }


// 5

function getCount(str) {
    var vowelsCount = 0;
    vowelsCount = str.match(/[aeiou]/gi);
    return vowelsCount ? vowelsCount.length:0;
  }


// 6

function getCount(str) {
    return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
   }