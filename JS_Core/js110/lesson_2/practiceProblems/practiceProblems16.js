/*
Given the following data structure write some code to return an array containing the colors of the fruits and the sizes of the vegetables. 
The sizes should be uppercase, and the colors should be capitalized.
*/

let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

//The return value should look like this:
[["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]

let produceArr = Object.values(obj);

let answer = produceArr.map((produce) => {
  if (produce.type === 'fruit') {
    return produce.colors.map(color => color[0].toUpperCase() + color.slice(1));
  } else if (produce.type === 'vegetable') {
    return produce.size.toUpperCase();
  }
});

console.log(answer);