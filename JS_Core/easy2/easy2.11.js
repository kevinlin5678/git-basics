/*
Write a function that takes a non-empty string argument and returns the middle character(s) of the string. 
If the string has an odd length, you should return exactly one character. 
If the string has an even length, you should return exactly two characters.

Examples:
centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"
*/


//my answer
let string = 'LAUNCHSCHOOL'

function centerOf(str) {
  if (str.length % 2 === 0) {
    return str[(str.length / 2) - 1] + str[str.length / 2];
  } else {
    return str[(str.length / 2) - 0.5];
  }
}

console.log(centerOf(string));

//SOLUTION
function centerOf(string) {
  if (string.length % 2 === 1) {
    let centerIndex = (string.length - 1) / 2;
    return string[centerIndex];
  } else {
    let leftIndex = string.length / 2 - 1;
    return string.substring(leftIndex, leftIndex + 2);
  }
}


/*
.substring(start, end) extracts a portion of a string.

Start index is inclusive, end index is exclusive.

If end is omitted, it extracts until the end of the string.

If start > end, JavaScript swaps them automatically.

Does not modify the original string.
*/