/*
Create a simple tip calculator. 
The program should prompt for a bill amount and a tip rate. The program must compute the tip, and then log both the tip and the total amount of the bill to the console. 
You can ignore input validation and assume that the user will enter valid positive numbers.
*/

//my answer
let rlSync = require('readline-sync');

let billAmount = rlSync.question("How much is the bill? \n");
let tipPercentage = rlSync.question("What % tip would you like to leave? \n");

console.log(`The tip is $${billAmount * (tipPercentage * 0.01)}.\n The total is $${parseInt(billAmount) + parseFloat(((billAmount * (tipPercentage * 0.01))).toFixed(2))}`);

//SOLUTION
let readlineSync = require("readline-sync");

let bill = parseFloat(readlineSync.question("What is the bill?\n"));

let percentage = parseFloat(
  readlineSync.question("What is the tip percentage??\n")
);

let tip = bill * (percentage / 100);

let total = bill + tip;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);