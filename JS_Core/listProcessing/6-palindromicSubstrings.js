function palindromes(str) {
  return substrings(str).filter(isPalindrome);
}

function isPalindrome(str) {
  return str.split('').reverse().join('') === str && str.length > 1
}


function substrings(str) {
  let tempArr = [];
  for (let i = 0; i < str.length; i++) {
    let substring = str.substring(i);
    tempArr = tempArr.concat(leadingSubstrings(substring));
  }

  return tempArr;
}

function leadingSubstrings(str) {
  let tempArr = [];
  for (let i = 1; i <= str.length; i++) {
    tempArr.push(str.slice(0, i));
  }
  
  return tempArr;
}


palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]