let computerWins = 0;
let playerWins = 0;

while(computerWins + playerWins < 5){
  let playerSelection = prompt('Choose rock, paper or scissors');
  playerSelection = playerSelection.toLowerCase();
  let computerSelection = getComputerChoice();
  let result = playRound(playerSelection, computerSelection);

  if(result != 'tie') {
    console.log(`You picked ${playerSelection}, Computer picked ${computerSelection} .You ${result} round!`);
  } else {
    console.log('Tie, try again!');
  };

  if(computerWins + playerWins === 5 && computerWins > playerWins) {
    console.log(`You lose, you win ${playerWins} rounds! computer win ${computerWins} rounds!`);
  } else if(computerWins + playerWins === 5 && computerWins < playerWins) {
    console.log(`You win, you win ${playerWins} rounds! computer win ${computerWins} rounds!`);
  };
}

function playRound(playerSelection, computerSelection) {

  if(playerSelection == 'rock' && computerSelection == 'paper' ||
    playerSelection == 'paper' && computerSelection == 'scissors' ||
    playerSelection == 'scissors' && computerSelection == 'rock') {
      computerWins++;
      return 'lose';
    } else if(playerSelection == 'rock' && computerSelection == 'scissors' ||
              playerSelection == 'paper' && computerSelection == 'rock' ||
              playerSelection == 'scissors' && computerSelection == 'paper') {
                playerWins++;
                return 'win';
              } else if(playerSelection === computerSelection) {
                        return 'tie';
                      }

}

function getComputerChoice(computerChoice) {
  let randomNumber = Math.random();

  if(randomNumber < 1 / 3) {
    computerChoice = 'rock';
  } else if(randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerChoice = 'paper';
  } else if(randomNumber >= 2 / 3) {
    computerChoice = 'scissors';
  }
  return computerChoice;
}

