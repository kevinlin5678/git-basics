// Starting with the string:
let munstersDescription = "The Munsters are creepy and spooky.";

// Return a new string that swaps the case of all of the letters:
// `tHE mUNSTERS ARE CREEPY AND SPOOKY.`;

//my answer

function returnNewString(str) {
  let array = str.split('');
  let emptyArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i].toUpperCase()) {
      emptyArray.push(array[i].toLowerCase());
    } else if (array[i] === array[i].toLowerCase()) {
      emptyArray.push(array[i].toUpperCase());
    } else {
      emptyArray.push(array[i]);
    }
  }
  return emptyArray.join('');
}

console.log(returnNewString(munstersDescription));

//SOLUTION
console.log(
  munstersDescription
    .split("")
    .map(function (char) {
      if (char === char.toUpperCase()) {
        return char.toLowerCase();
      } else {
        return char.toUpperCase();
      }
    })
    .join("")
);
