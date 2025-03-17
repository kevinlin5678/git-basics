/*
Write a program that asks the user to enter an integer greater than 0, 
then asks whether the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.
*/

//my answer
let rlSync = require('readline-sync');

let integer = parseInt(rlSync.question("Please enter an integer greater than 0.\n"));
let choice = rlSync.question("Enter the letter 's' if you would like the sum, or enter the letter 'p' if you would like the product of all the numbers between 1 and the entered integer.\n");

let total;

function sumOrProduct() {
  if (choice === 's') {
    total = 0;
    for (let i = integer; i > 0; i--) {
      total += i;
    }
    console.log(`The sum of the integers between 1 and ${integer} is ${total}`);
  } else if (choice === 'p') {
    total = 1;
    for (let i = integer; i > 0; i--) {
      total *= i;
    }
    console.log(`The product of the integers between 1 and ${integer} is ${total}`);
  }
}

sumOrProduct();
//works well!

//SOLUTION
function computeSum(targetNum) {
  let total = 0;

  for (let num = 1; num <= targetNum; num += 1) {
    total += num;
  }

  return total;
}

function computeProduct(targetNum) {
  let total = 1;

  for (let num = 1; num <= targetNum; num += 1) {
    total *= num;
  }

  return total;
}

let readlineSync = require("readline-sync");

console.log("Please enter an integer greater than 0");
let number = parseInt(readlineSync.prompt(), 10);

console.log("Enter 's' to compute the sum, 'p' to compute the product.");
let operation = readlineSync.prompt();

if (operation === "s") {
  let sum = computeSum(number);
  console.log(`The sum of the integers between 1 and ${number} is ${sum}.`);
} else if (operation === "p") {
  let product = computeProduct(number);
  console.log(
    `The product of the integers between 1 and ${number} is ${product}.`
  );
} else {
  console.log("Oops. Unknown operation.");
}


