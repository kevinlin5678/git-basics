// What will the following two lines of code output?

console.log(0.3 + 0.6);
console.log(0.3 + 0.6 === 0.9);

//my answer
// 0.9
// true

//SOLUTION-------------------------------------------------------
/*
0.8999999999999999
false

JavaScript uses floating point numbers for all numeric operations. 
Most floating point representations used on computers lack a certain amount of precision, and that can yield unexpected results like these.
*/