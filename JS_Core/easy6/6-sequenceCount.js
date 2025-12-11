function sequence(count, int) {
  let arr = [];

  for (let i = 1; i <= count; i++) {
    arr.push(int * i);
  }

  return arr;
}