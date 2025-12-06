function isPalindromicNumber(num) {
  num = String(num);

  return num === num.split('').reverse().join('');
}