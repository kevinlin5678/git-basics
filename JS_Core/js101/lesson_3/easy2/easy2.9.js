// If we have a 40-character wide table of Flintstone family members, how can we center the following title above the table with spaces?
let title = "Flintstone Family Members";

//my answer
let padding = Math.floor((40 - title.length) / 2);
let centeredTitle = title.padStart(padding, '');

// The padStart method works by adding padding before the string to reach a specified total length, 
// so the argument to padStart should be the total desired width of the string after padding, not just the amount of padding to add.

//corrected version of my original answer
let padding2 = Math.floor((40 - title.length) / 2);
let centeredTitle2 = title.padStart(padding2 + title.length, ' ') //make sure there is a space


//SOLUTION
let padding3 = Math.floor((40 - title.length) / 2);

title.padStart(padding3 + title.length);