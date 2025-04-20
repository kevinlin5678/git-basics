/*
A double number is an even-length number whose left-side digits are exactly the same as its right-side digits. For example, 44, 3333, 103103, and 7676 are all double numbers, whereas 444, 334433, and 107 are not.

Write a function that returns the number provided as an argument multiplied by two, unless the argument is a double number, in which case, return the double number as-is.

Examples:
twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676
*/

//my answer
function twice(num) {
  let convertToString = String(num);
  if (convertToString.substring(0, (convertToString.length / 2)) === convertToString.substring((convertToString.length / 2), convertToString.length)) {
    return num;
  } else {
    return num * 2;
  }
}


//SOLUTION
function twice(number) {
  if (isDoubleNumber(number)) {
    return number;
  } else {
    return number * 2;
  }
}

function isDoubleNumber(number) {
  let stringNumber = String(number);
  let center = Math.floor(stringNumber.length / 2);
  let leftNumber = stringNumber.substring(0, center);
  let rightNumber = stringNumber.substring(center);

  return leftNumber === rightNumber;
}

/*
The challenging part of this problem is determining how to compare the left-side numbers with the right-side numbers. 
The trick is to compare them as strings instead of as numbers.

Given this, the solution does the following via the isDoubleNumber function:

Gets the left-side and right-side substrings by calculating the middle index of stringNumber.
Returns the result of comparing the left and right substrings.
If the length of stringNumber is odd, it is not a double number.
If the length of stringNumber is even, there is a chance that it is a double number.
*/
