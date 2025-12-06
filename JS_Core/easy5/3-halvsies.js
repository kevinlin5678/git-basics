function halvsies(arr) {
let firstHalf = arr.slice(0, findMiddleOfArray(arr));
let secondHalf = arr.slice(findMiddleOfArray(arr));


let combinedArr = [[...firstHalf], [...secondHalf]];

return combinedArr;
}

function findMiddleOfArray(arr) {
  let middle = Math.ceil(arr.length / 2);
  return middle
}

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]