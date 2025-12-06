function average(arr) {
  let total = 0;

  arr.forEach(element => total += element);

  return Math.floor(total / arr.length);
}