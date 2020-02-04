// Given a year, return the century it is in.

// centuryFromYear(1705)  returns (18)
// centuryFromYear(1900)  returns (19)

// solutions


// 1

function century(year) {
    const result = String(year / 100).split('.')
    return result.length === 2 ? Number(result[0]) + 1 : Number(result[0])
}


// 2

function century(year) {
    return (year + 99) / 100 | 0;
}


// 3

const century = year => Math.ceil(year/100);


// 4

const century = year => year % 100 === 0 ? parseInt(year / 100, 0) : parseInt(year / 100, 0) + 1;


// 5

function century(year) {
    if (year <= 100){
      return 1;
    }
    let cen = parseInt(year / 100);
    let rem = year % 100;
    return rem === 0 ? cen : cen + 1;
}