function swapName(str) {
  return str.split(' ').reverse().join(', ')
}

function swapNameHasMiddle(str) {
  let arr = str.split(' ')

  let lastName = arr.pop();

  arr.unshift(lastName + ',');

  return arr.join(' ')

}

swapName('Karl Oskar Henriksson Ragvals');    // "Ragvals, Karl Oskar Henriksson"