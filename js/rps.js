

//Get input from player 
function getInput() {
  while (true) {
    let input = prompt("Enter your desired figure or it's first letter (case-insensitive)").toLowerCase();

    switch (input) {
      case "rock":
      case "r":
        return "Rock";
      case "paper":
      case "p":
        return "Paper";
      case "scissors":
      case "s":
        return "Scissors";
      default:
        break;
    }
  }
}

//Generate a random RPS figure
function randomRPS() {
  let random = Math.floor(Math.random() * 3);
  switch (random) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors";
    default:
      break;
  }
}

//Compare player input and generated figure to determine who won and return the results as a string
function playRound(playerFig, computerFig) {
  let figuresUsed = `(Your ${playerFig} vs. computer's ${computerFig})`
  let winMsg = "You won! " + figuresUsed
  let loseMsg = "You lost! " + figuresUsed
  
  if (playerFig === computerFig) return "It's a tie! " + figuresUsed

  switch (playerFig) {
    case "Rock":
      return (computerFig === "Paper") ? loseMsg : winMsg;
    case "Paper":
      return (computerFig === "Scissors") ? loseMsg : winMsg;
    case "Scissors":
      return (computerFig === "Rock") ? loseMsg : winMsg;
    default:
      return false; //should actually throw an error
  }
}
//Return the result to player and start a new game
