let rlSync = require('readline-sync');

let number1 = Number(rlSync.question(`==> Enter the first number: `));
let number2 = Number(rlSync.question(`==> Enter the second number: `));
let number3 = Number(rlSync.question(`==> Enter the third number: `));
let number4 = Number(rlSync.question(`==> Enter the fourth number: `));
let number5 = Number(rlSync.question(`==> Enter the fifth number: `));
let lastNumber = Number(rlSync.question(`==> Enter the last number: `));

let first5arr = [number1, number2, number3, number4, number5];

if (first5arr.includes(lastNumber))  {
  console.log(`The number ${lastNumber} appears in ${first5arr}.`);
} else {
  console.log(` The number ${lastNumber} does not appear in ${first5arr}.`);
}


