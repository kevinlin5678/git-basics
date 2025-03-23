/*
Create a function that takes two arguments, multiplies them together, and returns the result.

Example:
console.log(multiply(5, 3) === 15); // logs true
*/

//my answer
function multiply(num1, num2) {
  return num1 * num2;
}


//SOLUTION
const multiply = (num1, num2) => num1 * num2;

/*
As you can see, the arrow function in this case shrinks our code to only one line. 
Also, since the arrow function has only a single expression as the function body, the resulting value will be returned implicitly when the function is called.
*/