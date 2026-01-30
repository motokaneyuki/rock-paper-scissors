console.log('Welcome to the Rock Paper Scissors Game!');

const buttons = document.querySelector('.buttons');
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const battle = document.querySelector('.battle');
const userScoreResult = document.querySelector('.userScoreResult');
const computerScoreResult = document.querySelector('.computerScoreResult');
const popup = document.querySelector('.popup');
const results = document.querySelector('.results');
const playAgainButton = document.querySelector('.playAgainButton');


function getComputerChoice(){
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

buttons.addEventListener('click', (event) => {
    if (!popup.classList.contains('hidden')) return;
    let target = event.target;
    let humanChoice = target.textContent.toLowerCase();
    playGame(humanChoice);
})

let computerScore = 0;
let humanScore = 0;

function playGame(humanChoice) {
    function playRound (humanChoice, computerChoice) {
        // console.log("call playRound");
        if (humanChoice === 'rock' && computerChoice === 'paper') {
            battle.textContent = 'Cat did ' + computerChoice + '...\nYou lose! Paper beats Rock';
            computerScore++;
        } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
            battle.textContent = 'Cat did ' + computerChoice + '...\nYou win! Rock beats scissors';
            humanScore++;
        } else if (humanChoice === 'rock' && computerChoice === 'rock') {
            battle.textContent = 'Cat did ' + computerChoice + '...\nIt\'s a tie';
        } else if (humanChoice === 'paper' && computerChoice === 'paper') {
            battle.textContent = 'Cat did ' + computerChoice + '...\nIt\'s a tie';
        } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
            battle.textContent = 'Cat did ' + computerChoice + '...\nYou lose! Scissors beat Paper';
            computerScore++;
        } else if (humanChoice === 'paper' && computerChoice === 'rock') {
            battle.textContent = 'Cat did ' + computerChoice + '...\nYou win! Paper beats rock';
            humanScore++;
        } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
            battle.textContent = 'Cat did ' + computerChoice + '...\nYou win! Scissors beat Paper';
            humanScore++;
        } else if (humanChoice === 'scissors' && computerChoice === 'scissors') {
            battle.textContent = 'Cat did ' + computerChoice + '...\nIt\'s a tie';
        } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
            battle.textContent = 'Cat did ' + computerChoice + '...\nYou lose! Rock beats Scissors';
            computerScore++;
        } 
    }


    let computerSelection = getComputerChoice();
    playRound(humanChoice, computerSelection);

    userScoreResult.textContent = 'You: ' + humanScore;
    computerScoreResult.textContent = 'Cat: ' + computerScore;

    if (humanScore == 5) {
        results.textContent = 'You WIN!';
        popup.classList.toggle('hidden');
    } else if (computerScore == 5) {
        results.textContent = 'You LOST!';
        popup.classList.toggle('hidden');
    }
}

playAgainButton.addEventListener('click', () => {
    popup.classList.toggle('hidden');
    humanScore = 0;
    computerScore = 0;
    userScoreResult.textContent = 'You: ';
    computerScoreResult.textContent = 'Cat: ';
    battle.textContent = 'Choose your attack!';
})