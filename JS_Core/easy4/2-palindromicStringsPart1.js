// first try

function isPalindrome(str) {
  let reverseStrArr = [];

  for (let i = str.length - 1; i >= 0; i--) {
    reverseStrArr.push(str[i]);
  }

  let reverseStr = reverseStrArr.join('');

  return str === reverseStr ? true : false;
}

// textbook solution is just a oneliner...
function isPalindrome2(str) {
  return str === str.split('').reverse().join('');
}