function leadingSubstrings(str) {
  let tempArr = [];
  for (let i = 1; i <= str.length; i++) {
    tempArr.push(str.slice(0, i));
  }
  
  return tempArr;
}

leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]