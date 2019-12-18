// Mr. Scrooge has a sum of money 'P' that wants to invest, and he wants to know how many years 
// 'Y' this sum has to be kept in the bank in order for this sum of money to amount to 'D'.
// The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly, 
// and the new sum is re-invested yearly after paying tax 'T'
// Note that the principal is not taxed but only the year's accrued interest

// Let P be the Principal = 1000.00      
// Let I be the Interest Rate = 0.05      
// Let T be the Tax Rate = 0.18      
// Let D be the Desired Sum = 1100.00


// After 1st Year -->
// P = 1041.00
// After 2nd Year -->
// P = 1083.86
// After 3rd Year -->
// P = 1128.30

//solutions

// 1

function calculateYears(principal, interest, tax, desired) { 
    let yearsCounter = 0;  
   while (principal < desired) {
     principal = principal + (principal*interest-principal*interest*tax);
     yearsCounter ++;
     }
     return yearsCounter;  
  }

// 2

function calculateYears(principal, interest, tax, desired) {
    // your code
    var years = 0;
    while(principal < desired){
      principal += (principal * interest) * (1 - tax);
      years++;
    }
    return years;
}

// 3

function calculateYears(principal, interest, tax, desired) {
    return Math.ceil(
      Math.log(desired / principal) / 
      Math.log(1 + interest * (1 - tax))
    );
  }

// 4

function calculateYears(P,I,T,D) { return Math.ceil( Math.log(D/P) / Math.log1p(I*(1-T)) ); }

// 5

function calculateYears(principal, interest, tax, desired) {
    var year = 0;
        while (principal < desired){
            principal += principal * interest * (1 - tax);
            year +=1;
         }
        return year;
    }