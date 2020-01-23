// Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, 
// you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// solutions

// 1

function friend(friends){
    const arr = [];
    for (let i = 0; i < friends.length; i++) {
        if (friends[i].length == 4) {
        arr.push(friends[i]);
        };
    };
    return arr;
}


// 2

const friend = friends => friends.filter(friend => friend.length === 4);


// 3

function friend(friends){
    var arr = [];
    for(i=0; i<friends.length; i++){
      if(friends[i].length == 4 && isNaN(friends[i])){
        arr.push(friends[i]);
      }
    }
    return arr
}


// 4

