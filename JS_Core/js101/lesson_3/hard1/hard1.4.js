// Can you identify all of the variables, primitive values, and objects in the following code?

function boo(scare) {
  let myBoo = scare.toUpperCase() + "!!!";
  console.log(myBoo);
}

const halloweenCollection = {
  greet: "Happy Halloween",
  scare: "Boo",
  wish: "May all your pumpkins be glowing",
};

let myBoo = boo(halloweenCollection["greet"]);


//my answer
// variables: boo, scare, myBoo, halloweenCollection, myBoo 5 total
// primitives: !!!, Happy Halloween, Boo, May all your pumpkins be glowing, greet 5 total
// objects: halloweenCollection, boo 2 total



//SOLUTION-------------------------------------------------------
/*
There are 5 variables, 13 primitive values, and 2 objects. Re-examine the code if you found less before looking at the rest of the solution.

primitives:
The keys and values from the halloweenCollection object are all strings. That includes 1."greet", 2."scare", 3."wish", 4."Happy Halloween", 5."Boo", and 6."May all your pumpkins be glowing".
On line 12, we're passing the value of the greet property to the boo function by value. Namely, we're passing a copy of the string 7."Happy Halloween". On that same line, the string 8."greet" is used to access that value.
Inside of the function body, on line 2, scare.toUpperCase() returns a new string, 9."HAPPY HALLOWEEN", which is going to be concatenated with another string, 10."!!!". 
Ultimately, the concatenation results in yet another string, 11."HAPPY HALLOWEEN!!!", which is what myBoo is initialized to.
On the next line, the value of myBoo is passed into 12.console.log by value, i.e. a copy of that string is passed and logged to the console.
Finally, the function returns  13.undefined, which is assigned to the global myBoo, on line 12.
*/