function scream(message, helper) {
  const shout = () => message.toUpperCase();

  return helper(shout());
}

const exclamate = str => str + "!!!";

const foo = ["heLp", "Boo", "arGH", "Oh no"];
const FOO = foo.map(word => scream(word, exclamate));

// Identify the higher-order functions and callbacks in this code.

// There are 2 higher-order functions that can be seen immediately in this code. 1 on line 1, and 1 on line 10.

// There are 2 callback functions that can be seen immediately in this code. 2 on line 10.