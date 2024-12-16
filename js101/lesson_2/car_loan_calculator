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
const readline = require('readline-sync');

function prompt(msg) {
  console.log(`==> ${msg}`);
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num)) || Number(num) < 0 || Number(num) === 0
}

function notProperMonth(num) {
  return Number(num) < 0 || Number.isInteger(Number(num)) === false || Number(num) === 0 || num.trimStart() === '' || Number.isNaN(Number(num))
}

prompt('Welcome to Loan Payment Calculator v1.0! Please follow the instructions and input your data to figure out your monthly payment!')

prompt('What is your loan amount in total?')
let totalLoanAmount = readline.question();

while (invalidNumber(totalLoanAmount)) {
  prompt("Hmmm...that doesn't look like a valid number.");
  totalLoanAmount = readline.question();
}
console.clear();

prompt('What is your Annual Percentage Rate (APR)? Enter this as this as a whole number, not a decimal (4.5% would be 4.5 not 0.045)')
let APR = readline.question();

while (invalidNumber(APR)) {
  prompt("The input doesn't seem quite right, try again.");
  APR = readline.question();
}
console.clear();

prompt('What is your loan duration in months?')
let loanDuration = readline.question();

while (notProperMonth(loanDuration)) {
  prompt("Hmmm...that isn't a valid number of months. Try again.");
  loanDuration = readline.question();
}
console.clear();

let monthlyInterestRate = ((Number(APR) / 100)/ 12);

totalLoanAmount = Number(totalLoanAmount);
loanDuration = Number(loanDuration);

let monthlyPayment = totalLoanAmount * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-loanDuration))));

prompt(`You entered: 
  Loan Amount: $${totalLoanAmount}
  APR: ${APR}%
  Loan Duration: ${loanDuration} months`);
prompt(`Your monthly interest rate is ${(monthlyInterestRate * 100).toFixed(2)}% for ${loanDuration} months.`) 
prompt(`Your monthly payment is  $${monthlyPayment.toFixed(2)}.`)
prompt(`You will end up paying $${((monthlyPayment * loanDuration) - totalLoanAmount).toFixed(2)} in interest over the duration of your loan.`);