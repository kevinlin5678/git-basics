/*
Write a function that returns an Array that contains every other element of an Array that is passed in as an argument. 
The values in the returned list should be those values that are in the 1st, 3rd, 5th, and so on elements of the argument Array.

Examples:

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []
*/

//my answer
function oddities(arr) {
  let temparr = [];
  for (let i = 0; i < arr.length; i++) { // EVEN THOUGH IT WORKS IT'S INEFFICIENT BECAUSE YOU HAVE TO ITERATE THROUGH EVERY PART OF THE ARRAY INSTEAD OF THE REQUIRED INDICIES
    if (i % 2 === 0) {
      temparr.push(arr[i]);
    }
  }
  return temparr;
}



//SOLUTION
function oddities(array) {
  let oddElements = [];
  for (let idx = 0; idx < array.length; idx += 2) { // THIS ONE IS MORE EFFICIENT BECAUSE IT ONLY GOES TO THE THE REQUIRED INDICIES 
    oddElements.push(array[idx]);
  }
  return oddElements;
}
