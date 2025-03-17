/*
Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.
*/


//my answer(s)
for (let i = 1; i < 100; i += 2) {
  console.log(i);
}

//or

for (let i = 1; i < 100; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}


//SOLUTION
for (let number = 1; number < 100; number += 2) {
  console.log(number);
}
