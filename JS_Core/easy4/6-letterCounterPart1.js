function letterCounter(str) {
  let arr = str.split(' ');

  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === 0) {
      continue;
    } else if (obj[arr[i].length]) {
      obj[arr[i].length] += 1;
    } else {
      obj[arr[i].length] = 1;
    }
  }

  return obj;
}

console.log(letterCounter('hey hey hey'));