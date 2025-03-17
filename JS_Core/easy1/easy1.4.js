/*
Build a program that asks the user to enter the length and width of a room in meters, and then logs the area of the room to the console in both square meters and square feet.

Note: 1 square meter == 10.7639 square feet

Do not worry about validating the input at this time. Use the readlineSync.prompt method to collect user input.

Example:
Enter the length of the room in meters:
10
Enter the width of the room in meters:
7
The area of the room is 70.00 square meters (753.47 square feet).

*/

//my answer

let rlSync = require('readline-sync');
let question1 = rlSync.question('What is the length of the room in meters? \n');
let question2 = rlSync.question('What is the width of the room in meters? \n');

console.log(`The area of the room is ${question1 * question2} square meters (${(question1 * question2 * 10.7639).toFixed(2)} square feet).`)


//SOLUTION
// this solution only works for versions of JS in the 1.0 versions, future versions of prompt() do not capture values and return them.
let readlineSync = require("readline-sync");

const SQMETERS_TO_SQFEET = 10.7639;

console.log("Enter the length of the room in meters:");
let length = readlineSync.prompt();
length = parseInt(length, 10);

console.log("Enter the width of the room in meters:");
let width = readlineSync.prompt();
width = parseInt(width, 10);

let areaInMeters = (length * width);
let areaInFeet = (areaInMeters * SQMETERS_TO_SQFEET);

console.log(
  `The area of the room is ${areaInMeters.toFixed(2)} square meters (${areaInFeet.toFixed(2)} square feet).`
);

/*
Notice that the constant, SQMETERS_TO_SQFEET, is written in ALL_CAPS. This follows the idiomatic naming convention for constants.
The readlineSync.prompt method returns a string. The parseInt function converts that string to an integer.
The Number.prototype.toFixed method returns a string. You can read more about this method here. 
Essentially, toFixed() method formats a number. 
An argument can be also passed to the method call (we passed number 2 in our example) and that signifies the number of digits to appear after the decimal point. 
This argument is optional, and if it is omitted, it is treated as 0.
*/