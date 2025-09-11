//PEDAC AKA P:roblem, E:xperiment, D:ata structures, A:lgorithm, C:ode

//PROBLEM
/*
Write a program that, given the number for a specific amount of cubes, 
calculates the number of blocks left over after building the tallest possible valid structure.

Explicit:
1. The top layer is a single cube
2. A block in a lower layer can support more than one cubes in an upper layer
3. You cannot leave gaps between cubes
Implicit:
1. Cubes are equal length objects, they are squared
2. The second layer needs to be at least 4 cubes
3. After the top layer, there at least needs to be 4 cubes per layer

Questions:
1. How are cubes defined? What are they made of?
2. What are gaps? Why would we not want them? Where do these gaps come from?
*/

//EXAMPLES
/*
So we aren't trying to create a picture.. we are just solving a math problem? I thought I had to create a program that made blocks stack on top of eachother 
while also returning the amount of blocks leftover... 

It seems the mental model of squares and adding one extra square per column and row is going alright based on the test cases provided...

I think they raise further questions.. If one block on the lower layer can support more than one block on the upper layer, why aren't we just building 4x4 all the way down?
Is there a need for a larger square underneath?
*/

//DATA STRUCTURES
/*
So we need a loop that counts the amount of layers we have as well as increment how large the next layer is.
We are using math to see if there are remaining blocks leftover.
*/

//ALGORITHM
/*
The first layer will be set to 1.
It seems like a lower layer needs to be at least a larger square layer than the one above it, so we need an incrementation loop for that.
There needs to be a way to check if we have enough blocks to make the next layer.
We should subtract the amount of blocks already used to make the previous layers.
*/

//CODE

function calculateLeftoverBlocks(n) {
  let currentLayer = 0;
  let remainingCubes = n;

  let requiredCubes = (currentLayer + 1)**2

  while (remainingCubes >= requiredCubes) {
    remainingCubes -= requiredCubes;
    currentLayer += 1;
    requiredCubes = (currentLayer + 1)**2
  }

  return remainingCubes;
}

/* You generally wouldn't want to code out the complete solution like this before running it. 
A better approach would be to build your solution iteratively and running your code regularly as you did so */


//example:

// rest of function
while (remainingCubes >= requiredCubes) {
  remainingCubes -= requiredCubes;
  currentLayer += 1;
  requiredCubes = (currentLayer + 1)**2;
  console.log(
    {remainingCubes},
    {currentLayer},
    {requiredCubes}
  );
}

// {remainingCubes: 3} {currentLayer: 1} {requiredCubes: 4}

