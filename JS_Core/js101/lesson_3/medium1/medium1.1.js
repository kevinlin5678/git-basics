// For this practice problem, write a program that outputs The Flintstones Rock! 
// 10 times, with each line indented 1 space to the right of the line above it. The output should start out like this:
/*
The Flintstones Rock!
 The Flintstones Rock!
  The Flintstones Rock!
   The Flintstones Rock!
    ...
*/

//my answer
const theyRock = 'The Flintstones Rock!';

function flintStonesRock() {
  for (let i = 0; i < 10; i++) {
    console.log(theyRock.padStart(i + theyRock.length, ' '));
  }
}

flintStonesRock();

//SOLUTION
for (let padding = 0; padding <= 9; padding++) {
    console.log(' '.repeat(padding) + 'The Flintstones Rock!');
}