/*
Write a function that returns the next to last word in the String passed to it as an argument.

Words are any sequence of non-blank characters.

You may assume that the input String will always contain at least two words.

Examples:
console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true
*/

//my answer
function secondLast(str) {
  let arr = str.split(' ');
  return arr[arr.length - 2];
}

//SOLUTION
function penultimate(words) {
  let wordsArray = words.split(" ");
  return wordsArray[wordsArray.length - 2];
}

/*
In this problem we first break our words up and put them into an array. Anything that isn't whitespace is considered a word, so we can just use split() to divvy up the words. 
Then, we grab the second to last object in our words array by using wordsArray.length - 2 and return it to the caller.
*/