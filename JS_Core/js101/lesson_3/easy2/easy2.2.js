// Write two distinct ways of reversing the array without mutating the original array.
// Use reverse for the first solution, and sort for the second.

let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
numbers.sort((num1, num2) => num2 - num1);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

// Bonus Question: Can you do it using the Array.prototype.forEach() method?

//my answer
let reverseNumbers = numbers.slice().reverse();
let reverseNumbers2 = [...numbers].sort((a, b) => b - a);

let reverseNumbers3 = [];
numbers.forEach((number) => reverseNumbers3.unshift(number));

//SOLUTION
let reversedArray1 = numbers.slice().reverse();
console.log(reversedArray); // [5, 4, 3, 2, 1]
console.log(numbers); // [1, 2, 3, 4, 5]


//
let sortedArray = [...numbers].sort((num1, num2) => num2 - num1);
console.log(sortedArray); // [5, 4, 3, 2, 1]
console.log(numbers); // [1, 2, 3, 4, 5]


//
let reversedArray = [];
numbers.forEach((number) => {
  reversedArray.unshift(number);
});

console.log(reversedArray); // [5, 4, 3, 2, 1]
console.log(numbers); // [1, 2, 3, 4, 5]