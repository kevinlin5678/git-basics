/*
EX 3
Action: method call (map) || Performed on: outer array || Side Effect: none || Return Value: new array ([undefined], [undefined]) || Is Return Value Used?: no

Action: call back execution || Performed on: each sub-array || Side Effect:  none || Return Value: undefined || Is Return Value Used?: yes, used by `map` for transformation

Action: element access ([0]) || Performed on: each sub-array || Side Effect: none || Return Value: Element at index 0 of sub-array || Is Return Value Used?: yes, by `console.log` 

Action: method call (console.log) || Performed on: element at index 0 of each sub-array || Side Effect: outputs a string representation of an integer || Return Value: undefined || Is Return Value Used?: yes used as the return value of the callback


Action: element reference ( [0] ) || Performed on: element 0 of each sub-array || Side Effect: gives `map` a return value to use || Return Value: element 0 of each sub-array || Is Return Value Used?: yes, by method call `map`
*/

/*
EX 4
So this example is using forEach, it should return undefined regardless. 
We are working on a nested array here..
Oh! but we are return arr.map?? wtf is going on lol
and then we have an if statement that returns a console.log...
huh?

maybe all of this is just smoke and mirrors and `myArr` will have the value of `undefined`? 
That's what im guessing.
*/

/*
EX5

[[1, 2], [3, 4]].map(arr => {
  return arr.map(num => num * 2);
});

so for the first iteration `map` will give us [1, 2] and [3, 4] to work with
and then in the callback we are going through another `map` which will give us [1, 2] and [3, 4] 
but we are now working with every element in the arrays, not just the array as a whole
and then there is a nested callback that returns each element doubled.
it should give us [2, 4] [6, 8] i believe

the answer is: [ [ 2, 4 ], [ 6, 8 ] ]
I was missing the outer brackets

*/








/*
EX 3
Action: || Performed on: || Side Effect: || Return Value: || Is Return Value Used?: 
Action: || Performed on: || Side Effect: || Return Value: || Is Return Value Used?: 
Action: || Performed on: || Side Effect: || Return Value: || Is Return Value Used?: 
*/