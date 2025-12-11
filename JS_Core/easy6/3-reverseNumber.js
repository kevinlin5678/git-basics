function reverseNumber(num) {
  let reverseNum = Number(String(num).split('').reverse().join(''));

  return reverseNum;
}

console.log(reverseNumber(12345));  // 54321
console.log(reverseNumber(12213));  // 31221
console.log(reverseNumber(456));    // 654
console.log(reverseNumber(12000));  // 21
console.log(reverseNumber(1));      // 1

// JS automatically cuts off all leading zeros!!! wow..