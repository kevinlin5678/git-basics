// Create a deep copy of the following nested array.

const arr = [
  ['b', 'c', 'a'],
  ['blue', 'black', 'green'],
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

const deepClone = JSON.parse(JSON.stringify(arr));

/*
We can use the built-in JSON methods stringify and parse to generate a deep copy of a complex nested data structure. 
The first step, JSON.stringify(arr), converts the argument array to a JSON string. 
Then, we pass that string to JSON.parse, which converts the JSON string back to a JavaScript Array.
JSON.parse(JSON.stringify(arr))
JSON.parse(JSON.stringify(arr))
JSON.parse(JSON.stringify(arr))
JSON.parse(JSON.stringify(arr))
JSON.parse(JSON.stringify((arr))
*/
// modern solutions use

let deepCopy = structuredClone(arr);
// this solution preserves functions, circular references, etc
