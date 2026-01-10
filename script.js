console.log('Hello World');

/* 
STEP 2
When a function (getComputerChoice) is called 
Return a random number greater than or equal to 0 and less than 1
Exchange the number to rock/paper/scissors
*/

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

console.log(randomNumber);
// console.log(getComputerChoice());

/* 
STEP 3
When user inputs a choice of rock/paper/scissors
return their input
*/

let attack;

function getHumanChoice() {
    attack = prompt('How will you attack?');
    return attack;
}

// console.log(getHumanChoice());

let computerScore = 0;
let humanScore = 0;

function playRound (humanChoice, computerChoice) {
    if (humanChoice === 'rock' && computerChoice === 'paper') {
        return console.log('You lose! Paper beats Rock');
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        return console.log('You win! Rock beats scissors');
    } else if (humanChoice === 'rock' && computerChoice === 'rock') {
        return console.log('It\'s a tie');
    }
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);