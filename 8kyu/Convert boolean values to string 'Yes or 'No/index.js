//Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// solutions

// 1

function boolToWord(bool){
    if (bool) {
      return 'Yes';
    } else {
      return 'No';
    }
}


// 2

function boolToWord(bool){
    return bool ? 'Yes':'No';
}


// 3

let boolToWord = bool => bool ? 'Yes' : 'No';


// 4

function boolToWord( bool ){
    return ['No','Yes'][+bool];
}