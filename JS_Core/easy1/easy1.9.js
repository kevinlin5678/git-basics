/*
The British Empire adopted the Gregorian Calendar in 1752, which was a leap year. 
Prior to 1752, they used the Julian Calendar. Under the Julian Calendar, leap years occur in any year that is evenly divisible by 4.

Using this information, update the function from the previous exercise to determine leap years both before and after 1752.

Examples:
isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // true
isLeapYear(1);         // false
isLeapYear(100);       // true
isLeapYear(400);       // true
*/

//my solution
function isLeapYear(year) {
  if (year <= 1752) {
    if (year % 4 === 0) {
      return true;
    } else {
      return false;
    }
  } else if (year > 1752) {
    if (year % 4 === 0 && year % 100 !== 0) {
      return true;
    } else if (year % 100 === 0 && year % 400 === 0) {
      return true;
    } else if (year === 0) {
      return false;
    } else {
      return false;
    }
  }
}

console.log(isLeapYear(2016));
console.log(isLeapYear(2015));
console.log(isLeapYear(2100));
console.log(isLeapYear(2400));
console.log(isLeapYear(240000));
console.log(isLeapYear(240001));
console.log(isLeapYear(2000));
console.log(isLeapYear(1900));
console.log(isLeapYear(1752));
console.log(isLeapYear(1700));
console.log(isLeapYear(1));
console.log(isLeapYear(100));
console.log(isLeapYear(400));

//SOLUTION
function isLeapYear(year) {
  if (year < 1752 && year % 4 === 0) {
    return true;
  } else if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else {
    return year % 4 === 0;
  }
}
/*
The change to the original isLeapYear function is small: just an additional if clause at the beginning of the function.
*/