console.log('Welcome to the Rock Paper Scissors Game!');

let randomNumber = Math.random() * 100;

function getComputerChoice() {
    if (randomNumber <= 33) {
        return 'rock';
    } else if (randomNumber > 66) {
        return 'paper';
    } else 
        return 'scissors';
}

// SWITCH VERSION:
// function getComputerChoice() {
//     switch (false) {
//     case randomNumber <= 33:
//         return 'rock';
//         break;
//     case randomNumber > 66:
//         return 'paper';
//         break;
//     default:
//         return 'scissors';
//         break;
//     }
// }

// console.log(randomNumber);
// console.log(getComputerChoice());

function getHumanChoice() {
    let attack = prompt('How will you attack?');
    return attack.toLowerCase();
}

// console.log(getHumanChoice());

let computerScore = 0;
let humanScore = 0;

function playRound (humanChoice, computerChoice) {
    if (humanChoice === 'rock' && computerChoice === 'paper') {
        console.log('You lose! Paper beats Rock');
        computerScore++;
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        console.log('You win! Rock beats scissors');
        humanScore++;
    } else if (humanChoice === 'rock' && computerChoice === 'rock') {
        console.log('It\'s a tie');
    } else if (humanChoice === 'paper' && computerChoice === 'paper') {
        console.log('It\'s a tie');
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        console.log('You lose! Scissors beat Paper');
        computerScore++;
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        console.log('You win! Paper beats rock');
        humanScore++;
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        console.log('You win! Scissors beat Paper');
        humanScore++;
    } else if (humanChoice === 'scissors' && computerChoice === 'scissors') {
        console.log('It\'s a tie');
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        console.log('You lose! Rock beats Scissors');
        computerScore++;
    } 
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
console.log('Your Score: ' + humanScore);
console.log('Computer Score: ' + computerScore);