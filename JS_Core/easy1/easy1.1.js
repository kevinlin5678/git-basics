/*
Write a function that takes one integer argument, which may be positive, negative, or zero. 
This method returns true if the number's absolute value is odd. 
You may assume that the argument is a valid integer value.

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
*/

//my answer
function isOdd(num) {
  if (num % 2 === 0) {
    return false;
  } else {
    return true;
  }
}


//SOLUTION
function isOdd(number) {
  return Math.abs(number) % 2 === 1;
}

//Math.abs converts a negative number to a positive value. This is why it is needed.