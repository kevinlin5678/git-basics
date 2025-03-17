// Will the code below raise an error?

let numbers = [1, 2, 3];
numbers[6] = 5;
numbers[4];  // what will this line return?

//my answer: no the code will not raise an error
// it will set the undeclared indexes with an empty space or "undefined".
// line 5 will return undefined

//SOLUTION numbers[4] will output undefined, but the slot is empty 
// it doesn't have a value, not even undefined, in spite of what the line returns.

numbers[5] = undefined; // => [ 1, 2, 3, <2 empty items>, undefined, 5 ]
numbers.map(() => 10);  // => [ 10, 10, 10, <2 empty items>, 10, 10 ]