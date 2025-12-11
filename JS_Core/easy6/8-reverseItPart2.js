function reverseWords(str) {
  let arr = str.split(' ');

  let reverseArr = arr.map((element) => {
    if (element.length < 5) {
      return element;
    } else {
      return element.split('').reverse().join(''); 
    }
  });

  return reverseArr.join(' ');
}

reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"