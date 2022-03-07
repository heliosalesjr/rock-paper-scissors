const computerChoiceDisplay = document.getElementById('computer-choice');
const humanChoiceDisplay = document.getElementById('human-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let humanChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    humanChoice = e.target.id
    humanChoiceDisplay.innerHTML = humanChoice
    generateComputerChoice();
    getResult();
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    // or we could have used possibleChoices.length
    if (randomNumber === 1) {
        computerChoice = 'rock'
      }
    if (randomNumber === 2) {
        computerChoice = 'scissors'
    }  
    if (randomNumber === 3) {
        computerChoice = 'paper'
    }
      computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    if (computerChoice === humanChoice) {
      result = 'its a draw!'
    }
    if (computerChoice === 'rock' && humanChoice === "paper") {
      result = 'you win!'
    }
    if (computerChoice === 'rock' && humanChoice === "scissors") {
      result = 'you lost!'
    }
    if (computerChoice === 'paper' && humanChoice === "scissors") {
      result = 'you win!'
    }
    if (computerChoice === 'paper' && humanChoice === "rock") {
      result = 'you lose!'
    }
    if (computerChoice === 'scissors' && humanChoice === "rock") {
      result = 'you win!'
    }
    if (computerChoice === 'scissors' && humanChoice === "paper") {
      result = 'you lose!'
    }
    resultDisplay.innerHTML = result;
  }