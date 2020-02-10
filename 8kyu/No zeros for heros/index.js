// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105

// solutions


// 1

function noBoringZeros(n) {
    while (n % 10 === 0 && n !== 0) {
      n = n / 10
    }
    return n
}


// 2

const noBoringZeros = n => parseInt(n.toString().replace(/0+$/g, "") + 0) / 10;


// 3

function noBoringZeros(n) {
    return Number(n.toString().replace(/0+\b/, ''));
}


// 4

function noBoringZeros(n) {
    str = n.toString();
    if( str.endsWith('0') === false || str.length === 1) return parseInt(n, 10);
    else if (str.endsWith('0') === true) {
      return noBoringZeros(parseInt(str.substring(0, str.length-1)))
    }
}