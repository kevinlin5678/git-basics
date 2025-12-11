function isBalanced(str) {
  let parens = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      parens++;
    } else if (str[i] === ')') {
      parens--;
    }

    if (parens < 0) {
      return false;
    }
  }

  return parens === 0;
}


console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);