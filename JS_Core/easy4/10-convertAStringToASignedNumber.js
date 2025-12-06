function stringToInteger(str) {
  const DIGITS = {
    '0': 0,
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '0': 0
  }

  let arr = str.split('').map(char => DIGITS[char]);
  let value = 0;
  
  arr.forEach(digit => (value = (10 * value) + digit));

  return value;
}

function stringToSignedInteger(str) {
  switch (str[0]) {
    case '-': return -stringToInteger(str.slice(1, str.length));
    case '+': return stringToInteger(str.slice(1, str.length));
    default: return stringToInteger(str);
  }
}