// MY SOLUTION
/*
function substrings(str) {
  let tempArr = [];
  for (let i = 0; i < str.length; i++) {
    for (let l = i + 1; l <= str.length; l++) {
      tempArr.push(str.slice(i, l));
    }
  }

  return tempArr;
}
*/

//textbook solution

function substrings(str) {
  let tempArr = [];
  for (let i = 0; i < str.length; i++) {
    let substring = str.substring(i);
    tempArr = tempArr.concat(leadingSubstrings(substring));
  }

  return tempArr;
}





function leadingSubstrings(str) {
  let tempArr = [];
  for (let i = 1; i <= str.length; i++) {
    tempArr.push(str.slice(0, i));
  }
  
  return tempArr;
}


console.log(substrings('abcde'));

// returns
["a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e"]