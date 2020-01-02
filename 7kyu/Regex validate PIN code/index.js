// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// validatePIN("1234") === true
// validatePIN("12345") === false
// validatePIN("a234") === false


// solutions

// 1 

function validatePIN (pin) {   
    if(/^(\d{4}|\d{6})$/.test(pin)){
      return true; 
    }else{
      return false; 
    }
  }


// 2

function validatePIN(pin) {
    return /^(\d{4}|\d{6})$/.test(pin)
  }


// 3

function validatePIN (pin) {
    return  (pin.length == 4 || pin.length == 6) && parseInt(pin) == pin
  }


// 4

function validatePIN (pin) {
    var n = pin.length;
    if( n != 4 && n != 6)
        return false;
    for (var i in pin)
        if (pin[i] > '9' || pin[i] < '0')
            return false;
    return true;
  }


// 5

function validatePIN (pin) {
    let Regex = /^\d{4}$|^\d{6}$/g
    return Regex.test(pin)
  }