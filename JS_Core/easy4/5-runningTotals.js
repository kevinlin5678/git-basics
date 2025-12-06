function runningTotals(arr) {

  let totalArr = [];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    totalArr.push(sum += arr[i]);
  }

  return totalArr;
}


// using callback methods
let sum = 0;
let runningTotalsArr = arr.map(num => sum += num);