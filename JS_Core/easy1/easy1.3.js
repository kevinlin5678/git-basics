/*
Log all even numbers from 1 to 99, inclusive, to the console, with each number on a separate line.
*/

//my answer

for (let i = 2; i < 100; i += 2) {
  console.log(i);
}


//SOLUTION
for (let i = 1; i < 100; i++) {
  if (i % 2 === 1) {
    continue;
  }

  console.log(number);
}