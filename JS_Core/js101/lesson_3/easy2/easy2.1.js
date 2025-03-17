// Given a string, return a new string that replaces every occurrence of the word "important" with "urgent":

let advice = "Few things in life are as important as house training your pet dinosaur.";

//my answer
advice.replace('imporant', 'urgent');

//SOLUTION
advice.replace('important', 'urgent');
// => Few things in life are as urgent as house training your pet dinosaur.
// if you wanted to replace every single case of 'important' then you would need to use advice.replaceAll('important', 'urgent').
// advice.replace('important', 'urgent'); only replaces the first case of 'important'