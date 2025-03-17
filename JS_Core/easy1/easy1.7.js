/*
Write a function that takes two strings as arguments, determines the length of the two strings,
and then returns the result of concatenating the shorter string, the longer string, and the shorter string once again. 
You may assume that the strings are of different lengths.

Examples:
shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz" 

*/
//my solution
function shortLongShort(str1, str2) {
  if (str1.length > str2.length) {
    return str2 + str1 + str2;
  } else {
    return str1 + str2 + str1;
  }
}


console.log(shortLongShort('fuck', 'sheit'));

//SOLUTION
function shortLongShort(string1, string2) {
  if (string1.length > string2.length) {
    return string2 + string1 + string2;
  } else {
    return string1 + string2 + string1;
  }
}

/*
This solution takes advantage of the fact that JavaScript automatically coerces string primitives to String objects when needed.

Notice how string1 and string2 can both use the .length property, even though they both reference string primitive values and not String objects. 
It's as if both values were created using the new String() function (i.e., new String('abc')).
*/

