let foo = 'bar';
console.log(foo);
foo;

let name = 'Kevin ' + 'Lin';
console.log(name);

let number = 4936;
let ones = number % 10;

number = (number - ones) / 10;

let tens = number % 10;

number = (number - tens) / 10;

let hundreds = number % 10; 

let thousands = (number - hundreds) / 10;

let names = ['asta', 'butterscotch', 'pudding', 'neptune', 'darwin'];

let pets = {
  asta: 'dog',
  butterscotch: 'cat',
  pudding: 'cat',
  neptune:  'fish',
  darwin: 'lizard'
};

