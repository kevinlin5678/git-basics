/*
Write a function that computes the sum of all numbers between 1 and some other number, inclusive, that are multiples of 3 or 5. 
For instance, if the supplied number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

You may assume that the number passed in is an integer greater than 1.

Examples:
multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168
*/

//my answer 
function multisum(num) {
  let total = 0;
  for (let i = num; i > 1; i--) {
    if (i % 3 === 0) {                           //                     THIS VERSION OF THE CODE IS A LOT LESS SIMPLIFIED AND SOMEWHAT REDUNDANT..
      total += i;
    } else if (i % 5 === 0) {
      total += i;
    } else {
      continue;
    }
  }
  return total;
}

function multiSum (number) {
  let total = 0;
  for (let i = number; i > 1; i--) {
    if (i % 3 === 0 || i % 5 === 0) {// SIMPLIFIED VERSION OF the original, continue is redundant and unneeded. however doesnt break the logic, just better to read this way
      total += i;
    }
  }
  return total;
}


//SOLUTION

function isMultiple(number, divisor) {
  return number % divisor === 0;
}

function multisum(maxValue) {
  let sum = 0;

  for (let number = 1; number <= maxValue; number += 1) {
    if (isMultiple(number, 3) || isMultiple(number, 5)) {
      sum += number;
    }
  }

  return sum;
}

/*
The solution begins with an isMultiple function that returns true if the given number is a multiple of the divisor, or false if it is not. 
This function isn't entirely necessary, but it makes the main function a bit more readable.

The main function, multisum, adds each value in the range to our sum variable if the value is a multiple of 3 or 5.
*/