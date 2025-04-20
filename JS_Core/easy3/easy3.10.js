/*
Write a function that takes a year as input and returns the century. 
The return value should be a string that begins with the century number, and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

New centuries begin in years that end with 01. So, the years 1901 - 2000 comprise the 20th century.

Examples:
century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"

*/



function century(year) {
  let yearNumber = Number(year);

  let centuryNumber = Math.ceil(yearNumber / 100);

  let century = centuryNumber.toString();

  if (century[century.length - 1] === '1' && century[century.length - 2] !== '1') {
    return `${century}st`;
  } else if (century[century.length - 1] === '2' && century[century.length - 2] !== '1') {
    return `${century}nd`;
  } else if (century[century.length - 1] === '3' && century[century.length - 2] !== '1') {
    return `${century}rd`;
  } else {
    return `${century}th`;
  }
}

//SOLUTION
function century(year) {
  let centuryNumber = Math.floor(year / 100) + 1;

  if (year % 100 === 0) {
    centuryNumber -= 1;
  }

  return String(centuryNumber) + centurySuffix(centuryNumber);
}

function centurySuffix(centuryNumber) {
  if (catchWithTh(centuryNumber % 100)) {
    return 'th';
  }

  let lastDigit = centuryNumber % 10;
  switch (lastDigit) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}

function catchWithTh(lastTwo) {
  return lastTwo === 11 || lastTwo === 12 || lastTwo === 13;
}
/*
First, notice the pattern about a century. It is equal to the current year divided by 100 plus 1. 
The exception to this is when the year is a multiple of 100. 
In that case, the century is the current year divided by 100.

Next, notice the suffix to append to the century, the options being: 'th', 'nd', 'rd', 'st'.

With this, the solution decides which suffix to use by checking the last digit of the century. 
But before doing that, it does one extra check. 
If the remainder of dividing the century by 100 ends in either 11, 12, or 13, the solution returns 'th'. 
Any other time, it returns a suffix determined by the switch statement and the value of centuryNumber % 10.

Finally, it combines the string representation of the century with the correct suffix, giving us our answer.
*/