const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

function prompt(msg) {
  console.log (`==> ${msg}`);
}

let humanScore = 0;
let computerScore = 0;

function displayBestOfFive(choice, computerChoice) {
  if (
    ((choice === 'rock') && (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
    ((choice === 'paper') && (computerChoice === 'rock' || computerChoice === 'spock')) ||
    ((choice === 'scissors') && (computerChoice === 'paper' || computerChoice === 'lizard')) ||
    ((choice === 'lizard') && (computerChoice === 'spock' || computerChoice === 'paper')) ||
    ((choice === 'spock') && (computerChoice === 'rock' || computerChoice === 'scissors'))
  ) {
    prompt('You get 1 point.');
    humanScore++;
  } else if (
    ((choice === 'rock') && (computerChoice === 'paper' || computerChoice === 'spock')) ||
    ((choice === 'paper') && (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
    ((choice === 'scissors') && (computerChoice === 'rock' || computerChoice === 'spock')) ||
    ((choice === 'lizard') && (computerChoice === 'scissors' || computerChoice === 'rock')) ||
    ((choice === 'spock') && (computerChoice === 'paper' || computerChoice === 'lizard'))
  ) {
    prompt('The computer gets 1 point.');
    computerScore++;
  } else {
    prompt("No points are awarded.");
  }

  prompt(`First to win 3 matches is the grand winner! your score: ${humanScore} computer: ${computerScore}`);

  if (humanScore === 3) {
    prompt('Game is over! You are the grand winner!');
    humanScore = 0;
    computerScore = 0;
  } else if (computerScore === 3) {
    prompt('Game is over! The computer is the grand winner!');
    humanScore = 0;
    computerScore = 0;
  }
}


function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if (
    ((choice === 'rock') && (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
    ((choice === 'paper') && (computerChoice === 'rock' || computerChoice === 'spock')) ||
    ((choice === 'scissors') && (computerChoice === 'paper' || computerChoice === 'lizard')) ||
    ((choice === 'lizard') && (computerChoice === 'spock' || computerChoice === 'paper')) ||
    ((choice === 'spock') && (computerChoice === 'rock' || computerChoice === 'scissors'))
  ) {
    prompt('You win!');
  } else if (
    ((choice === 'rock') && (computerChoice === 'paper' || computerChoice === 'spock')) ||
    ((choice === 'paper') && (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
    ((choice === 'scissors') && (computerChoice === 'rock' || computerChoice === 'spock')) ||
    ((choice === 'lizard') && (computerChoice === 'scissors' || computerChoice === 'rock')) ||
    ((choice === 'spock') && (computerChoice === 'paper' || computerChoice === 'lizard'))
  ) {
    prompt('Computer wins!');
  } else {
    prompt("It's a tie!");
  }
}

function getFullChoice(input) {
  switch (input.toLowerCase()) {
    case 'r': return 'rock';
    case 'p': return 'paper';
    case 'sc': return 'scissors';
    case 'l': return 'lizard';
    case 'sp': return 'spock';
    default: return input.toLowerCase();
  }
}

while (true) {

  prompt(`Choose one: ${VALID_CHOICES.join(', ')} (or type shorthand: r, p, sc, l, sp):`);
  let choice = getFullChoice(readline.question().toLowerCase());

  while (!VALID_CHOICES.includes(choice.toLowerCase())) {
    prompt("That's not a valid choice. Choose one of: r, p, sc, l, sp.");
    choice = getFullChoice(readline.question());
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);
  displayBestOfFive(choice, computerChoice);

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }
  console.log('--------------------------');

  if (answer[0] !== 'y') break;
}