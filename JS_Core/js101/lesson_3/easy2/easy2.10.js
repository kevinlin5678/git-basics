// Write a one-line expression to count the number of lower-case t characters in each of the following strings:
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

//my answer
statement1.split().filter(char => char === 't').length;
statement2.split().filter( char => char === 't').length;

//SOLUTION
statement1.split('').filter(char => char === 't').length;
statement2.split('').filter( char => char === 't').length;