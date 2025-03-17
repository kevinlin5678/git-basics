// Using the following string, create a new string that contains all lowercase letters except for the first character, which should be capitalized. (See the example output.)

let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

//my answer
'T' + munstersDescription.slice(1, munstersDescription.length).toLowerCase();

//SOLUTION
munstersDescription.charAt(0).toUpperCase() +
  munstersDescription.substring(1).toLowerCase();