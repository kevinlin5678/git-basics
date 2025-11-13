/*
Given the following code, what will the final values of a and b be? Try to answer without running the code.
*/
let a = 2;
let b = [5, 8];
let arr = [a, b];

arr[0] += 2;
arr[1][0] -= a;


// so `a` should still be 2 since it is assigned to a primitive value and b will then change to [NaN, 8];
//oh! i misread, it seems that they are talking about the value assigned to `a`, not the string itself.. Read more carefully!
// with that in mind, it seems that a will equal 2 and b will equal `[3, 8]` 