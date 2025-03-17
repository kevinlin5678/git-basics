let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

// This code will create a nested array that looks like this:
// ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

// Create a new array that contains all of the above values, but in an un-nested format:
// [ 'Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles' ]



//my answer
flintstones = [].concat(...flintstones);

//SOLUTION
flintstones = [].concat(...flintstones);

flintstones = flintstones.reduce((accum, element) => {
  return accum.concat(element);
}, []);

newFlintstones = [];
flintstones = flintstones.forEach((element) => {
  newFlintstones = newFlintstones.concat(element);
});

flintstones = flintstones.flat();
// this method was added in 2019