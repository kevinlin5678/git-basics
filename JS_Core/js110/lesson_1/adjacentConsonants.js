//PROBLEM
/*
Given an array of strings, return a new array where the strings are sorted to the highest number of adjacent consonants a particular string contains. 
If two strings contain the same highest number of adjacent consonants they should retain their original order in relation to each other. 
Consonants are considered adjacent if they are next to each other in the same word or if there is a space between two consonants in adjacent words.

Note that for this problem, the letters 'y' and 'w' should be treated as consonants.

explicit:
- return a new array with highest number consonants first
- if two strings contain the same number of consonants they should retain their original order
- consonants can be next together or separated by a space between words

implicit:
- returning strings from highest to lowest of adjacent consonants
- remove vowels from strings before returning the new string in the array
- vowels are what separate strings and whether or not it is considered a "new" string 

questions:
- Are vowels what separate strings in the new array of returned strings?
- What about symbols or numbers?
- Can we assume all inputs will be letters only?
*/

//EXAMPLE
/*
Everything to me makes sense here except for the first example, why is baa behind aa?

- It seems that one consonants does not matter and it only matters if there are two or more adjacent consonants to be differentiated.
*/

//DATA STRUCTURES
/*
- Will need to use arrays to return the answer in the correct order
- Will be using loops to go through the initial array
- Will be using if statements on each iteration of the loop
*/

//ALGORITHM
/*
1. Take the initial array and put it into our function
2. Have the function be able to iterate over each letter and element of the array.
3. Count the number of adjacent consonants and compare them with the other elements of the initial array
4. Bring the element with the most amount of adjacent consonants to the front
5. Return the new array
*/

//IMPLEMENTATION


//this was the monster code that I tried to put together lol....
function countMaxAdjacentConsonants(str) {
  let noSpaceStr = str.split(' ').join('');
  let count = 0;
  let temporaryStr = '';
  
  for (let i = 0; i < noSpaceStr.length; i++) {
    if (noSpaceStr[i] !== 'a' && noSpaceStr[i] !== 'e' && noSpaceStr[i] !== 'i' && noSpaceStr[i] !== 'o' && noSpaceStr[i] !== 'u') {
      temporaryStr += noSpaceStr[i];
    } else if (temporaryStr.length > count && temporaryStr.length > 1) {
      count = temporaryStr.length
      temporaryStr = '';
    }
  }
  if (temporaryStr.length > count) {
    count = temporaryStr.length;
  }
  return count;
}

/*
function sortByAdjacentConsonants(arr) {
  let newArr = [];
  newArr.push(arr[0]);
  for (let i = 1; i < (arr.length); i++) {
    for (let l = 0; l < (newArr.length); l++) {
      if (countMaxAdjacentConsonants(arr[i]) > countMaxAdjacentConsonants(newArr[l])) {
        newArr.splice(l, 0, arr[i]);
        break;
      } else if (countMaxAdjacentConsonants(arr[i]) < countMaxAdjacentConsonants(newArr[l])) {
        newArr.splice((l + 1), 0, arr[i]);
        break;
      } else {
        let x = 1;
        while (countMaxAdjacentConsonants(arr[i]) == countMaxAdjacentConsonants(newArr[l])) {
          if (countMaxAdjacentConsonants(arr[i]) == countMaxAdjacentConsonants(newArr[l]) && 
        countMaxAdjacentConsonants(arr[i]) != countMaxAdjacentConsonants(newArr[l + x]) || 
        countMaxAdjacentConsonants(arr[i]) > countMaxAdjacentConsonants(newArr[l + x])) {
            newArr.splice((l + x), 0, arr[i]);
            break;
          } else {
            x++;
          }
        }
      }
    }
  }
  return newArr;
}

*/

// this is the clean and working version with some ai help
function sortByAdjacentConsonants(arr) {
  let newArr = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    let inserted = false;
    let currCount = countMaxAdjacentConsonants(arr[i]);

    for (let l = 0; l < newArr.length; l++) {
      let compareCount = countMaxAdjacentConsonants(newArr[l]);

      if (currCount > compareCount) {
        newArr.splice(l, 0, arr[i]);
        inserted = true;
        break;
      } else if (currCount === compareCount) {
        continue; // Let it insert *after* the last matching value
      }
    }

    if (!inserted) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}


let list1 = ['aa', 'baa', 'ccaa', 'dddaa']
let list2 = ['can can', 'toucan', 'batman', 'salt pan'];
let list3 = ['bar', 'car', 'far', 'jar'];
let list4 = ['day', 'week', 'month', 'year'];

console.log(sortByAdjacentConsonants(list1));
console.log(sortByAdjacentConsonants(list2));
console.log(sortByAdjacentConsonants(list3));
console.log(sortByAdjacentConsonants(list4));
