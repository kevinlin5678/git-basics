const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(num) {
  let str = '';

  do {
    let remainder = num % 10;
    str = DIGITS[remainder] + str;

    num = Math.floor(num / 10);
  } while (num > 0);

  return str;
}

function signedIntegerToString(num) {
  switch (Math.sign(num)) {
    case 1: 
      return `+${integerToString(num)}`;
    case -1:
      return `-${integerToString(num)}`;
    default:
      return integerToString(num); 
  }
}

console.log(signedIntegerToString(-0) === "-0");