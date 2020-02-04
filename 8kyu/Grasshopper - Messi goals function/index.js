// Messi is a soccer player with goals in three leagues:

// LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals in all three leagues.

// Note: the input will always be valid.

// 5, 10, 2  -->  17

// solutions


// 1

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals
}


// 2

const goals = (a,b,c) => a + b + c;


// 3


const goals = (...a) => a.reduce((b, c) => b + c, 0);


// 4

const goals = (...goalsArray) => goalsArray.reduce((a, b) => a + b);