// How can you determine whether a given string ends with an exclamation mark (!)?

let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

//my answer
let findExclamationMark = (str) => {
  return str.split('')[str.length - 1].includes('!');
}

//SOLUTION
str1.endsWith('!');
str2.endsWith('!');