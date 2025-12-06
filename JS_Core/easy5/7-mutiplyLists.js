const mulitplyLists = (arr1, arr2) => {
  let combinedArr = [];

  for (let i = 0; i < arr1.length; i++) {
    combinedArr.push(arr1[i] * arr2[i]);
  }

  return combinedArr;
}