const CONSONANTS = [
'b', 'c', 'd', 'f',
'g', 'h', 'j', 'k', 'l', 
'm', 'n', 'p', 'q', 'r',
's', 't', 'v', 'w', 'x',
 'y', 'z'];

function doubleConsonants(str) {
let finalStr = '';

for (let i = 0; i < str.length; i++) {
  if (CONSONANTS.includes(str[i].toLowerCase())) {
    finalStr += str[i] + str[i];
  } else {
    finalStr += str[i];
  }
}

return finalStr;

}

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""