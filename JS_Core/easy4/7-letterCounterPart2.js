function letterCounter(str) {
  let letters = 'abcdefghijklmnopqrstuvwxyz'
  let arr = str.split(' ');
  let cleanedArr = arr.map(element => {
    let cleanElement = '';
    for (let i = 0; i < element.length; i++) {
      if (letters.includes(element[i].toLowerCase())) {
        cleanElement += element[i];
      }
    }
    return cleanElement;
  });

  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    if (cleanedArr[i].length === 0) {
      continue;
    } else if (obj[cleanedArr[i].length]) {
      obj[cleanedArr[i].length] += 1;
    } else {
      obj[cleanedArr[i].length] = 1;
    }
  }

  return obj;
}

console.log(letterCounter("What's up doc?"));