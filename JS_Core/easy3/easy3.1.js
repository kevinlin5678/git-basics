/*
Write a function that takes a string argument and returns a new string that contains the value of the original string with all consecutive duplicate characters collapsed into a single character.

Examples:
crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""
*/

//my answer
function crunch(str) {
  let newString = '';
  for(let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) {
      newString += str[i];
    }
  }
  return newString;
}



//SOLUTION
function crunch(text) {
  let index = 0;
  let crunchText = '';

  while (index <= text.length - 1) {
    if (text[index] !== text[index + 1]) {
      crunchText += text[index];
    }

    index += 1;
  }

  return crunchText;
}
/*
Our solution builds a crunchText variable by iterating over each character in the text argument. 
While iterating over the characters in text, the key is to only append the character at the current index if it is not equal to the next character. 
If it is equal, then do nothing.
*/
