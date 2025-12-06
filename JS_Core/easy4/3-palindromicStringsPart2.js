let LETTERS = 'abcdefghijklmnopqrstuvwxyz';
let NUMBERS = '0123456789';

function isRealPalindrome(str) {
  str = str.toLowerCase();
  let cleanStr = '';

  for (let i = 0; i < str.length; i ++) {
    if (LETTERS.includes(str[i]) || NUMBERS.includes(str[i])) {
      cleanStr += str[i];
    }
  }

  return cleanStr === cleanStr.split('').reverse().join('');
}

// textbook solution breaks up functions so they only do "1 thing". They have a remove nonlettersnumber function, a isLetter function, and even a isNumber function...
// I will think about breaking up larger functions into smaller ones moving forward.