// What do you think the following code will output?
// How can you reliably test if a value is NaN?

let nanArray = [NaN];

console.log(nanArray[0] === NaN);

//my answer
// it will be false since NaN in JS is equal to nothing, not even itself.
// you can reliablly test if a value is NaN with the global function isNaN()  // ex: isNaN('str'/100)



//SOLUTION-----------------------------------------------------------
/*
The output is false. 
NaN -- not a number -- is a special numeric value that indicates that an operation that was intended to return a number failed. 
JavaScript doesn't let you use == and === to determine whether a value is NaN.


To test whether the value is NaN, we use the Number.isNaN() method:
console.log(Number.isNaN(nanArray[0])); // true

DONT USE isNaN() because it does a loose comparison and first coerces non-number inputs into being numbers before checking. this could have unwanted side effects. 
// ex: console.log(isNaN("hello"));    //  true (WRONG, "hello" is not NaN but gets converted to NaN)
*/