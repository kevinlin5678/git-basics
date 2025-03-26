/*
Write a function that takes a number as an argument. If the argument is a positive number, return the negative of that number. If the argument is a negative number, return it as-is.

Examples:
negative(5);     // -5
negative(-3);    // -3
negative(0);     // -0
*/

//my answer
function negative(num) {
  if (num / -1 === -num) { //very inefficient but works
    return num * -1;
  } else {
    return num;
  }
}

//
function negative(num) {
  return num > 0 ? -num : num; // very efficient made from ai
}



//SOLUTION
function negative(num) {
  return num > 0 ? -num : num;
}

/*
The solution uses the Math.abs method to convert any type of number argument to a positive number. 
The solution then multiplies this positive number by -1 to convert it to a negative number, and returns the result.
*/
