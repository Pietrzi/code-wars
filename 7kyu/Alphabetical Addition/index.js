// Your task is to add up letters to one letter.

// The function will be given a variable amount of arguments, each one being a letter to add.

// Notes:
// Letters will always be lowercase.
// Letters can overflow (see second to last example of the description)
// If no letters are given, the function should return 'z'
// Examples:
// addLetters('a', 'b', 'c') = 'f'
// addLetters('a', 'b') = 'c'
// addLetters('z') = 'z'
// addLetters('z', 'a') = 'a'
// addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
// addLetters() = 'z'

// solutions


// 1

function addLetters(...letters) {
    const alphabet = 'zabcdefghijklmnopqrstuvwxy';
    const sum = letters.reduce((sum, letter) => sum + alphabet.indexOf(letter), 0) % 26;
    return alphabet[sum];
}


// 2

function addLetters(...letters) {
    return String.fromCharCode((letters.reduce((sum, l) => sum + l.charCodeAt() - 96, 0) % 26 || 26) + 96)
}


// 3
 
function addLetters() {
    let sum = 0;
    for (let i = 0; i < arguments.length; ++i)
      sum+=arguments[i].charCodeAt()-'a'.charCodeAt()+1;
    if (sum == 0)
      sum+= 26;
    sum--
    sum%=26 ;
    return String.fromCharCode(sum+'a'.charCodeAt());
  }