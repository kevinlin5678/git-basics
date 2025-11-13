/*
One of the most frequently used real-world string operations is that of "string substitution," 
where we take a hard-coded string and modify it with various parameters from our program.

Given this previously seen family object, print the name, age, and gender of each family member:

Each output line should follow this pattern:

(Name) is a (age)-year-old (male or female).
*/

let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

function printFamily(obj) {
  // let i = 0;
  for (let member in obj) {
    console.log(`${Object.keys(obj)[i]} is a ${obj[member].age}-year-old ${obj[member].gender}.`);
  //  i++
  }
}
// dont need [i] here
printFamily(munsters);