/*
Given the following data structure, 
return a new array with the same structure, 
but with the values in each subarray ordered -- alphabetically or numerically as appropriate -- in ascending order.
*/

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let sortedArr = arr.map((innerArray) => {
  if (typeof innerArray[0] === "string") {
    return innerArray.slice().sort(); //need .slice here because it is a mutating method
  } else {
    return innerArray.slice().sort((a, b) => a - b)
  }
});

console.log(sortedArr);