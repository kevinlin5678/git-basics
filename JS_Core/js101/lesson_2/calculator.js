// ask the user for the first number
// ask the user for the second number
// ask the user for an opertation to perform
// perform the opertion on the two numbers
// print the result to the terminal
const readline = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

prompt('Welcome to Calculator!');

prompt("What's the first number?");
let number1 = readline.question();

while (invalidNumber(number1)) {
  prompt("Hmmm...that doesn't look like a valid number.");
  number1 = readline.question();
}

prompt("What's the second number?");
let number2 = readline.question();

while (invalidNumber(number2)) {
  prompt("Hmmm...that doesn't look like a valid number.");
  number2 = readline.question();
}

prompt('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
let operation = readline.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt("You must choose 1, 2, 3, or 4.");
  operation = readline.question();
}

let output;

switch (operation) {
  case '1':
    output = Number(number1) + Number(number2);
    break;
  case '2':
    output = Number(number1) - Number(number2);
    break;
  case '3':
    output = Number(number1) * Number(number2);
    break;
  case '4':
    output = Number(number1) / Number(number2);
    break;
}

prompt(`The result is ${output}`);


/* 
Need 
1. the loan amount
2. the Annual Percentage Rate (APR)
3. the loan duration
4. monthly interest rate (APR / 12)
5. loan duration in months
6. Try to print the payment amount as a dollar and cents amount, e.g., $123.45 or $371.00

let m = p * (j / (1 - Math.pow((1 + j), (-n)))); <--- formula for monthly interest payment calculator

m = monthly payment
p = loan amount
j = monthly interest rate
n = loan duration in months

PSEUDO CODE:

'welcome to interest payment calculator 1.0, please follow the instructions and input your date to figure out your monthly payment!'

to figure out for 'p': 'what is the total of your loan amount?'

to figure out for 'APR': 'what is your Annual Percentage Rate (APR)?'

to figure out loan duration in 'loanDuration': 'what is the duration of your loan in months?'


*/



