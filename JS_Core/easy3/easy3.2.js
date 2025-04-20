/*
Write a function that will take a short line of text, and write it to the console log within a box.

Examples:
logInBox('To boldly go where no one has gone before.');

will log on the console:
+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+

logInBox('');
+--+
|  |
|  |
|  |
+--+

You may assume that the output will always fit in your browser window.
*/

//my answer
function logInBox(str) {
  let topBottom = '+' + '-'.repeat(str.length + 2) + '+';
  let edges = '|' + ' '.repeat(str.length + 2) + '|';
  let text = '| ' + str + ' |';

  console.log(topBottom);
  console.log(edges);
  console.log(text);
  console.log(edges);
  console.log(topBottom);
}

logInBox('Hello, World!');
logInBox('');

//SOLUTION
function logInBox(message) {
  let horizontalRule = `+${"-".repeat(message.length + 2)}+`;
  let emptyLine = `|${" ".repeat(message.length + 2)}|`;

  console.log(horizontalRule);
  console.log(emptyLine);
  console.log(`| ${message} |`);
  console.log(emptyLine);
  console.log(horizontalRule);
}

/*
This is a fairly straight forward solution To simplify matters, 
we start out by setting horizontalRule and emptyLine to appropriate values for the top and bottom 2 lines of the box. 
The expression "-".repeat(message.length + 2) simply creates a string of message.size + 2 hyphens; 
combined with the + at the beginning and end of the string, 
this is just wide enough to draw the horizontal lines while leaving room for one blank on either side of the message.
*/
