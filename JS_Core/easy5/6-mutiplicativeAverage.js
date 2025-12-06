function multiplicativeAverage(arr) {
  let product = 1

  for (let i = 0; i < arr.length; i++) {
    product = product * arr[i];
  }

  return (product / arr.length).toFixed(3);
}