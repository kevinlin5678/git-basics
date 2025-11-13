/*
Perform the same transformation of sorting the subarrays we did in the previous exercise with one difference; sort the elements in descending order.
*/

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

// apparently my solution below only works with strings
// let backwardsSortedArr = arr.map((innerArr) => innerArr.slice().sort((b, a) => b - a));


//given solution
arr.map((innerArr) => {
  return innerArr.slice().sort((a, b) => {
    if (a > b) return -1;
    if (b > a) return 1;
    return 0;
  });
});