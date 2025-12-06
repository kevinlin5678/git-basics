function stringToInteger(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case '1':
        arr.push(1);
        break;
      case '2':
        arr.push(2);
        break;
      case '3':
        arr.push(3);
        break;
      case '4':
        arr.push(4);
        break;
      case '5':
        arr.push(5);
        break;
      case '6':
        arr.push(6);
        break;
      case '7':
        arr.push(7);
        break;
      case '8':
        arr.push(8);
        break;
      case '9':
        arr.push(9);
        break;
      case '0':
        arr.push(0);
        break;

    }
  }

  return arr.join('') * 1;
}



// need to iterate over str
// need to turn strs into numbers
// need to combine numbers together

