// Given a number and an array, determine whether the number is included in the array.

let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;  // false
let number2 = 95; // true

//my answer
numbers.includes(8);
numbers.includes(95);

//SOLUTION
numbers.includes(number1); // => false
numbers.includes(number2); // => true