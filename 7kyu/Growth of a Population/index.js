// In a small town the population is p0 = 1000 at the beginning of a year. 
// The population regularly increases by 2 percent per year and moreover 
// 50 new inhabitants per year come to live in the town. 
// How many years does the town need to see its population 
// greater or equal to p = 1200 inhabitants?

// solutions


// 1

function nbYear(p0, percent, aug, p) {
    let years = 0;
    let population = p0;
    const growthRate = percent / 100;
    while (population < p) {
    population += population*growthRate + aug;
    years++;
    }
    return years
}


// 2

function nbYear(p0, percent, aug, p) {
    if (p0 >= p) {
      return 0;
    }
    return 1 + nbYear(p0 + p0 * percent / 100 + aug, percent, aug, p);
}


// 3

const nbYear = (p0, percent, aug, p) => {
    let years = 0;
    while (p0 < p) {
      p0 = p0 + (p0 * percent/100)  + aug;
      years += 1;
    }
    return years;
}