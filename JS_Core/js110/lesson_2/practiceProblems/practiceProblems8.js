// Using the forEach method, write some code to output all vowels from the strings in the arrays. Don't use a for or while loop.
// [['the', 'quick'], ['brown', 'fox'], ['jumped'],  ['over', 'the', 'lazy', 'dog']]


let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};


//MY SOLUTION
/*
function printVowels(obj) {
  let values = Object.values(obj);
  let vowelString = '';
  let vowels = ['a', 'e', 'i', 'o', 'u']
  values.forEach((innerArr) => {
    innerArr.forEach((word) => {
      word.split('').forEach((letter) => {
        if (vowels.includes(letter)) {
          vowelString += letter;
        }
      })
    })
  })
  return vowelString;
}
*/

// the solultion provided looks like this instead:

let vowels = 'aeiou';

Object.values(obj).forEach(arr => {
  arr.forEach(word => {
    word.split('').forEach(char => {
      if (vowels.includes(char)) {
        console.log(char);
      }
    });
  });
});

// e
// u
// i
// o
// o
// u
// e
// o
// e
// e
// a
// o


