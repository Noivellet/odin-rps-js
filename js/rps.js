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
//Verify that input is a string and is R, P or S
//if not, then get input again
//if yes, then store in a variable
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
//Compare player input and generated figure to determine who won
//Return the result to player and start a new game
