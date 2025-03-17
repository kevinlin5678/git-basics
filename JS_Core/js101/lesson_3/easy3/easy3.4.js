// What will the following code output?

let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);

//my answer [{ first: 42 }, { second: "value2" }, 3, 4, 5];

//SOLUTION 
// There are two kinds of copy operations when working with objects and arrays. DEEP copy and SHALLOW copy
// DEEP copies make a duplicate of every item, making two different arrays as well as four separate objects.
// SHALLOW copies only make a duplicate of the outermost values in an array or object.