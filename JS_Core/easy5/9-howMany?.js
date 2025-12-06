function countOccurrences(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]] += 1;
    } else {
      obj[arr[i]] = 1;
    }
  }

  let objKeys = Object.keys(obj);

  for (let i = 0; i < objKeys.length; i++) {
    console.log(`${objKeys[i]} => ${obj[objKeys[i]]}`);
  }
}