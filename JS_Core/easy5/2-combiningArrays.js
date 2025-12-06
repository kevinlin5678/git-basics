function union(arr1, arr2) {
  let combinedArr = [...arr1, ...arr2].sort((a, b) =>  a - b);
  
  let sortedArr = [];

  for (let i = 0; i < combinedArr.length; i++) {
    if (i === 0) {
      sortedArr.push(combinedArr[i]);
    } else if (combinedArr[i] !== combinedArr[i - 1]) {
      sortedArr.push(combinedArr[i]);
    }
  }

  return sortedArr;
}

union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]