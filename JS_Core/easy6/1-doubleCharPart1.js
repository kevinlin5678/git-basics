function repeater(str) {
  let repeat = '';

  for (let i = 0; i < str.length; i++) {
    repeat += str[i] + str[i];
  }

  return repeat;
}

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""