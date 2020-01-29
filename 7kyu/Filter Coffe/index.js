
// solutions

// 1

function search(budget, prices) {
    prices.sort((a, b)=> a - b);
    var arr =[ ];
    for (let i = 0; i < prices.length; ++i)
      if (prices[i] <= budget)
        arr.push(prices[i]);
    return arr.join(',');
}


// 2

const search = (budget, prices) => budget !== 0 ? prices.filter(a => a <= budget).sort((a, b) => a - b).toString() : "";


// 3

let search = (budget, prices) => prices
    .filter(p => p <= budget)
    .sort((a, b) => a - b)
    .join(',')


// 4

function search(budget, prices) {
    var arr = [];
    prices.forEach(function(p){
      if(p<=budget)
        arr.push(p);
    });
    return arr.sort(function(a,b){ return a > b }).join();
}