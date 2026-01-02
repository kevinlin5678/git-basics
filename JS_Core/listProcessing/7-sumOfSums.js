//my first attempt
function sumOfSums(arr) {
  let sum = 0;
  let tempArr = [];

  for (let l = (arr.length - 1); l >= 0; l--) {
    let i = l;
    do {
      (tempArr.push(arr[i]))
      i--;
    } while (i >= 0)
  }

  tempArr.forEach(el => sum+= el);

  return sum;
}


function sumOfSums2(arr) {
  let runningTotal = 0;
  
  return arr.reduce((acc, num) => {
    runningTotal += num;
    return acc += runningTotal;
  }, 0)
}


sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35