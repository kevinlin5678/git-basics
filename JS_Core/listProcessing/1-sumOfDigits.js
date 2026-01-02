function sum(num) {
  let string = String(num);
  let sum = 0;

  string.split('').forEach(num => sum += (Number(num)));
  return sum;
}


function sum2(num) {
  String(num).split('').reduce((acc, digit) => acc += Number(digit), 0);
}

sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45