function swap(str) {
  let arr = str.split(' ');

  let reverseArr = arr.map(element => {
    return swapFirstLastChar(element);
  });

  return reverseArr.join(' ');
}

function swapFirstLastChar(word) {
  if (word.length === 1) {
    return word;
  }

  return word[word.length - 1] + word.slice(1, -1) + word[0];
}