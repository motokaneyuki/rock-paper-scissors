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
const musicButton = document.querySelector('.musicButton');
const audio = new Audio('audio/game-8-bit-399898.mp3');
const happyMeow = new Audio('audio/catHappyMeow.mp3');
const sadMeow = new Audio('audio/catSadMeowTwo.mp3');
const catImage = document.querySelector('.catImage');

musicButton.addEventListener('click', () => {
    let buttonCLicked = true;
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            audio.pause();
        } else if (!document.hidden && buttonCLicked == true) {
            audio.play();
        } else {
            audio.pause();
        }
    })
    if (audio.paused) {
        audio.currentTime = 0;
        audio.loop = true;
        audio.volume = 0.5;
        audio.play();
    } else {
        audio.pause();
        buttonCLicked = false;
    }
})

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
        if (humanChoice === 'rock' && computerChoice === 'paper') {
            battle.textContent = 'Cat did ' + computerChoice + '...\nYou lose! Paper beats Rock';
            computerScore++;
            catImage.src = 'img/catHappy.png';
            happyMeow.play();
        } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
            battle.textContent = 'Cat did ' + computerChoice + '...\nYou win! Rock beats scissors';
            humanScore++;
            catImage.src = 'img/catSad.png';
            sadMeow.play();
        } else if (humanChoice === 'rock' && computerChoice === 'rock') {
            battle.textContent = 'Cat did ' + computerChoice + '...\nIt\'s a tie';
            catImage.src = 'img/catBattle.png';
        } else if (humanChoice === 'paper' && computerChoice === 'paper') {
            battle.textContent = 'Cat did ' + computerChoice + '...\nIt\'s a tie';
            catImage.src = 'img/catBattle.png';
        } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
            battle.textContent = 'Cat did ' + computerChoice + '...\nYou lose! Scissors beat Paper';
            computerScore++;
            catImage.src = 'img/catHappy.png';
            happyMeow.play();
        } else if (humanChoice === 'paper' && computerChoice === 'rock') {
            battle.textContent = 'Cat did ' + computerChoice + '...\nYou win! Paper beats rock';
            humanScore++;
            catImage.src = 'img/catSad.png';
            sadMeow.play();
        } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
            battle.textContent = 'Cat did ' + computerChoice + '...\nYou win! Scissors beat Paper';
            humanScore++;
            catImage.src = 'img/catSad.png';
            sadMeow.play();
        } else if (humanChoice === 'scissors' && computerChoice === 'scissors') {
            battle.textContent = 'Cat did ' + computerChoice + '...\nIt\'s a tie';
            catImage.src = 'img/catBattle.png';
        } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
            battle.textContent = 'Cat did ' + computerChoice + '...\nYou lose! Rock beats Scissors';
            computerScore++;
            catImage.src = 'img/catHappy.png';
            happyMeow.play();
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
    catImage.src = 'img/catBattle.png';
    userScoreResult.textContent = 'You: ';
    computerScoreResult.textContent = 'Cat: ';
    battle.textContent = 'Choose your attack!';
})