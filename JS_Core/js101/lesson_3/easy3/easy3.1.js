// Write three different ways to remove all of the elements from the following array:

let numbers = [1, 2, 3, 4];

//my answer
while (numbers.length > 0) {
  numbers.shift();
}

while (numbers.length > 0) {
  numbers.pop();
}

//SOLUTION
numbers.length = 0;

numbers.splice(0, numbers.length);

while (numbers.length) {
  numbers.pop();
}
