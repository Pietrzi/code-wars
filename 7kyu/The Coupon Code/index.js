// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.
// A coupon is no more valid on the day AFTER the expiration date.
// All dates will be passed as strings in this format: "MONTH DATE, YEAR".

// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false

// solutions

// 1

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    if ((enteredCode === correctCode) && (new Date(currentDate).getTime() <= new Date(expirationDate).getTime())){
      return true;
    } else {
      return false;
    }
  }

// 2

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    return enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate)
  }

// 3

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    return enteredCode===correctCode && new Date(currentDate) <= new Date(expirationDate);
  }

  
// 4

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    return enteredCode === correctCode &&
           Date.parse(currentDate) <= Date.parse(expirationDate);
  }

// 5 

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    var cd = new Date(currentDate);
    var ed = new Date(expirationDate);
    return (enteredCode === correctCode) && (ed >= cd);
  }
  