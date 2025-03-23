/*
Using the multiply() function from the "Multiplying Two Numbers" problem, 
write a function that computes the square of its argument (the square is the result of multiplying a number by itself).

Example:
console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true
*/

//my answer
function multiply(num1, num2) {
  return num1 * num2;
}

function square(num) {
  return multiply(num, num);
}

//SOLUTION
function square(number) {
  return multiply(number, number);
}

/*
Our implementation relies on the previous exercise's multiply() function. 
The return value of multiply() is the result of multiplying the two arguments we pass to it, so we can simply pass in the same number twice, which will return the squared value. 
Our square() function is implicitly returning the return value from multiply(number, number).
*/