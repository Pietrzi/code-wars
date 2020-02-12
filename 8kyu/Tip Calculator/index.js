// Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

// You need to consider the following ratings:

// Terrible: tip 0%
// Poor: tip 5%
// Good: tip 10%
// Great: tip 15%
// Excellent: tip 20%
// The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:

// Because you're a nice person, you always round up the tip, regardless of the service.

// solutions


// 1

function calculateTip(amount, rating) {
    let tip = 0;
    switch (rating.toLowerCase()) {
    case 'terrible':
    tip =  0;
    break;
    case 'poor':
    tip = Math.ceil(amount * 0.05);
    break;
    case 'good':
    tip = Math.ceil(amount * 0.1);
    break;
    case 'great':
    tip = Math.ceil(amount * 0.15);
    break;
    case 'excellent':
    tip = Math.ceil(amount * 0.20);
    break;
    default:
    tip = 'Rating not recognised';
    }
    return tip;
}


// 2

function calculateTip(amount, rating) {
    const tips = { 
      'terrible'  : 0, 
      'poor'      : .05, 
      'good'      : .1, 
      'great'     : .15, 
      'excellent' : .2 
    }
    rating = rating.toLowerCase();
    return rating in tips ? Math.ceil(amount * tips[rating]) : "Rating not recognised";
}


// 3

let calculateTip = (a,r) => {
    const i = ['terrible', 'poor', 'good', 'great', 'excellent'].indexOf(r.toLowerCase());
    return i === -1 ? "Rating not recognised" : Math.ceil(i*a*.05);
}