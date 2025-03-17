// Examine the following code carefully. Can you identify all of the variables, primitive values, and objects that exist when this code executes?

let arr = [1, 2, 3];
let newArr = arr;

const num = arr[0];
let newNum = num;

function double(num) {
  return num * 2;
}

double(newNum);

//my answer
/*
variables: arr, newArr, num, newNum, double(), num <-- inside the double function TOTAL: 6
primitive values: 1, 2, 3, 0, num, 2, newNum TOTAL: 7
objects: arr, newArr TOTAL: 2
*/



//SOLUTION
/*
variables: arr, newArr, num, newNum, double(), num <-- parameter inside the double function TOTAL: 6
primitive: 1, 2, 3, num, 0, newNum, 2, newNum, num TOTAL: 9 
objects: TOTAL: 2
*/