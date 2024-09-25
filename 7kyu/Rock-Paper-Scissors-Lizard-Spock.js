// DESCRIPTION:

// In this kata, your task is to implement an extended version of the famous rock-paper-scissors game. The rules are as follows:

// Scissors cuts Paper
// Paper covers Rock
// Rock crushes Lizard
// Lizard poisons Spock
// Spock smashes Scissors
// Scissors decapitates Lizard
// Lizard eats Paper
// Paper disproves Spock
// Spock vaporizes Rock
// Rock crushes Scissors
// Task:

// Given two values from the above game, return the Player result as "Player 1 Won!", "Player 2 Won!", or "Draw!".

function rpsls(pl1, pl2) {
  if (pl1 === pl2) {
    return "Draw!";
  }

  let hyerarchy = [
    ["scissors", "paper"],
    ["paper", "rock"],
    ["rock", "lizard"],
    ["lizard", "spock"],
    ["spock", "scissors"],
    ["scissors", "lizard"],
    ["lizard", "paper"],
    ["paper", "spock"],
    ["spock", "rock"],
    ["rock", "scissors"],
  ];

  for (let i = 0; i < hyerarchy.length; i++) {
    if (hyerarchy[i][0] === pl1 && hyerarchy[i][1] === pl2) {
      return "Player 1 Won!";
    }
  }
  return "Player 2 Won!";
}

//Input - String, representing players tool
//Output - String, declaration of winning player

//console.log(rpsls('rock','lizard'), 'Player 1 Won!')
//console.log(rpsls('paper','rock'), 'Player 1 Won!')
//console.log(rpsls('spock','lizard'), 'Player 2 Won!')

//First we set the draw condition if the two params are the same
//We create our array of player tools
//We make the tool hyerarchy
//Loop through and compare
