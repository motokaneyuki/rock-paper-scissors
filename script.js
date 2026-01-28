console.log('Welcome to the Rock Paper Scissors Game!');

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber){
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors'
            break;
    }
}

function getHumanChoice() {
    let attack = prompt('How will you attack? Rock, Paper, or Scissors?');
    return attack.toLowerCase();
}

let computerScore = 0;
let humanScore = 0;

function playGame() {
        function playRound (humanChoice, computerChoice) {
        if (humanChoice === 'rock' && computerChoice === 'paper') {
            console.log('Computer chose: ' + computerChoice);
            console.log('You lose! Paper beats Rock');
            computerScore++;
        } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
            console.log('Computer chose: ' + computerChoice);
            console.log('You win! Rock beats scissors');
            humanScore++;
        } else if (humanChoice === 'rock' && computerChoice === 'rock') {
            console.log('Computer chose: ' + computerChoice);
            console.log('It\'s a tie');
        } else if (humanChoice === 'paper' && computerChoice === 'paper') {
            console.log('Computer chose: ' + computerChoice);
            console.log('It\'s a tie');
        } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
            console.log('Computer chose: ' + computerChoice);
            console.log('You lose! Scissors beat Paper');
            computerScore++;
        } else if (humanChoice === 'paper' && computerChoice === 'rock') {
            console.log('Computer chose: ' + computerChoice);
            console.log('You win! Paper beats rock');
            humanScore++;
        } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
            console.log('Computer chose: ' + computerChoice);
            console.log('You win! Scissors beat Paper');
            humanScore++;
        } else if (humanChoice === 'scissors' && computerChoice === 'scissors') {
            console.log('Computer chose: ' + computerChoice);
            console.log('It\'s a tie');
        } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
            console.log('Computer chose: ' + computerChoice);
            console.log('You lose! Rock beats Scissors');
            computerScore++;
        } 
    }

    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    console.log('Your Score: ' + humanScore);
    console.log('Computer Score: ' + computerScore);
}

playGame();
// playGame();
// playGame();
// playGame();
// playGame();

if (humanScore > computerScore) {
    console.log('YOU WIN THE GAME. CONGRATULATIONS!');
} else if (humanScore < computerScore) {
    console.log('YOU LOST THE GAME. TRY AGAIN NEXT TIME!');
} else {
    console.log('THE GAME RESULT IS A TIE!');
}