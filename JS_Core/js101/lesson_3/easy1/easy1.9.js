// In the previous problem, our first answer added 'Dino' to the array like this: 
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push("Dino"); 
// How can we add multiple items to our array? ('Dino' and 'Hoppy')

//my answer
flintstones.push('Dino', 'Hoppy');

//SOLUTION
flintstones.push("Dino", "Hoppy");   // we can pass multiple arguments to push
flintstones; // => [ 'Fred', 'Barney', 'Wilma', 'Betty', 'Bambam', 'Pebbles', 'Dino', 'Hoppy' ]

