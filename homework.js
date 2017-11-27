// Episode 1
// What happened...
// global variable defined as Keith
// variable printName assigned to function, function prints out My name is
// and the value of variable name
// printName is then called
// The output will be My name is Keith

// Episode 2
// What happened...
// global variable score set to 5
// variable result assigned to function, function sets variable score to 3
// function returns value of score
// the result function is then called within console i.e will print the return
// of function
// The output will 3

// Episode 3
// What happened...
// variable myAnimals defined as an array of strings
// variable listAnimals assigned to function which sets myAnimals a global variable
// to new strings
// for each index in the array it will print the index number : and the value at
// that index
// The output will be
// 0: Ducks
// 1: Dogs
// 2: Lions

// Episode 4
// What happened...
// 4 suspects are defined as Jay, Val, Keith and Rick
// variable allSuspects assigned to function
// The function sets suspectThree to Harvey and then prints the name of all suspects
// The output will be
// Suspects include: Jay, Val, Harvey, Rick

// Episode 5
// What happened...
// The variable detective is defined as an object with the keys name and pet
// The variable printName is assigned to a function which takes in a detective object
// The function returns the name of the detective object that was passed in
// The variable detectiveInfo is assigned to a function
// The function changes the name of the detective object to Poirot
// It then calls the function printName which return the name of the detective
// The detectiveInfo is then called within console.log
// The output will be Poirot

// Episode 6
// What happened...
// Global variable murderer set to rick
// variable outerFunction assigned to a function which sets local variable
// murderer to marc
// The outerFunction also assigns a function to a local variable innerFunction
// innerFunction sets local variable murderer to valerie
// The innerFunction is called within the outerFunction
// outerFunction is called and then printed to screen
// The output will be
// the murderer is, rick


// Episode 7

var suspects = ['rick', 'marc', 'valerie'];
var primeSuspect = suspects[1];

var outerFunction = function() {
   suspects.pop();
   suspects.push('john');
   suspects.sort();
   primeSuspect = suspects[0];

  var innerFunction = function(index) {
    suspects.push('ally');
    suspects.sort();

    var primeSuspect = suspects[index];
  }

  innerFunction(2);
}

outerFunction();
console.log('The suspects are ' + suspects.join() + ' and the prime suspect is ', primeSuspect);
