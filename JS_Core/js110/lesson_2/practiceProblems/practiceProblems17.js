// Given the following data structure, write some code to return an array which contains only the objects where all the numbers are even.
let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];


let try4 = arr.filter((objs) => {
  return Object.values(objs).every((numArr) => {
    return numArr.every((num) => num % 2 === 0)
  })
})

console.log(try4)



/*
let try3 = arr.filter((objs) => {
  return Object.values(objs).every((num) => num % 2 === 0)
});

console.log(try3)
*/

/* FIRST TRY
let answer = arr.map((innerObjs) => {
  return Object.values(innerObjs).filter((numArr) => {
    if (numArr.every((num) => num % 2 === 0)) {
      return innerObjs;
    }
  });
});

console.log(answer);
console.log(answer.length)
*/


/* SECOND TRY
let actualAnswer = Object.values(arr).filter((numArr) => {
  if (numArr.every((num) => num % 2 === 0)) {
    return numArr;
  };
});

console.log(actualAnswer);
console.log(actualAnswer.length);
*/