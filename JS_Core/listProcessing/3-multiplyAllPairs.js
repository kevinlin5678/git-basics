function multiplyAllPairs(arr1, arr2) {
  let productArr = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let l = 0; l < arr2.length; l++) {
      productArr.push(arr1[i] * arr2[l]);
    }
  }

  return [...productArr].sort((a, b) => a - b);
}


multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]