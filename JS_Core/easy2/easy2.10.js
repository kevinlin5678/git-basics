/*
Build a program that logs when the user will retire and how many more years the user has to work until retirement.

Example:
What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go!
*/

//my answer
let rlSync = require('readline-sync');
let age = rlSync.question('What is your age?\n');
let retirement = rlSync.question('At what age would you like to retire?\n');

console.log(`It's 2025, you well retire in ${2025 + (retirement - age)}.`)
console.log(`You only have ${retirement - age} years to go!`)


//SOLUTION
let readlineSync = require("readline-sync");

let currentAge = Number(readlineSync.question("What is your age?\n"));
let retirementAge = Number(
  readlineSync.question("At what age would you like to retire?\n")
);

let today = new Date();

let currentYear = today.getFullYear();

let workYearsToGo = retirementAge - currentAge;
let retirementYear = currentYear + workYearsToGo;

console.log(`It's ${currentYear}. You will retire in ${retirementYear}. `);
console.log(`You have only ${workYearsToGo} years of work to go!`);

/*
The solution makes use of the Date object. 
It uses the Date.prototype.getFullYear method to return the year value of the Date object that was created. 
Note that there is also Date.prototype.getYear method available in the Date object, which returns a 2-3 digit representation of the year.

With the use of the getFullYear method, the solution gets the currentYear. 
It then computes the value of workYearsToGo by subtracting the current age from the retirementAge. 
Then to get the retirementYear, it adds the currentYear to the number of workYearsToGo.
*/