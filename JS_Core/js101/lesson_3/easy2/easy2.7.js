let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
// Create an array from this object that contains only two elements: Barney's name and Barney's number:
// [ 'Barney', 2 ]

//my answer // this answer isnt correct because it actually mutates the original flintstones array
Object.entries(flintstones).filter((pair) => {
  if (pair[0] === 'Barney') {
    pair.shift()
  }
})              

// here is a way to implement it with an if statement using a similar structure
Object.entries(flintstones).filter((pair) => {
  if (pair[0] === "Barney") {
    return true; // This ensures the pair passes the filter.
  }
  return false; // This ensures the pair is excluded.
}).shift();


//SOLUTION
Object.entries(flintstones).filter(pair => pair[0] === 'Barney').shift();