// show two different ways to put the expected "Four score and " in front of it.

let famousWords = "seven years ago...";

//my answer
let fullSentence = 'Four score and ' + famousWords;
let anotherFullSentence = `Four score and ${famousWords}`;

//SOLUTION
"Four score and " + famousWords;
"Four score and ".concat(famousWords);
