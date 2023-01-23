//Rock beats scissors, 
//scissors beat paper, and paper beats rock.
// getComputerChoice to randomly return Rock or Paper or Scissors
// playRound (playerSelection, computerSelection)
// "You Lose! Paper beats Rock"
// make playerSelection parameter case-insensitive
// game()   in which u use playRound to play 5 rounds of game
// keep score to report a winner and a loser at the end
// use for loop with conditionals
// use prompt()  to get imput from user
// playRound (playerSelection, computerSelection) {}


let round = 1
let scorePlayer = 0
let scoreComputer = 0
const options = ["Rock", "Paper", "Scissors"]

const btnRock = document.getElementById('btnRock');
const btnPaper = document.getElementById('btnPaper');
const btnScissors = document.getElementById('btnScissors');

const textLine1 = document.getElementById('text1');
const textLine2 = document.getElementById('text2');
const textLine3 = document.getElementById('text3');
const textLine4 = document.getElementById('text4');



function playerChoiceRock() {
    if ((scorePlayer > 4) || (scoreComputer > 4)) {
    btnRock.removeEventListener('click', playerChoiceRock);
    btnScissors.removeEventListener('click', playerChoiceScissors);  
    btnPaper.removeEventListener('click', playerChoicePaper); 
    if (scorePlayer == scoreComputer) {
        textLine1.textContent = "Your score: " + scorePlayer + " ; Computer's score: " + scoreComputer
        textLine2.textContent = "Game finished! It's a tie!"
        textLine3.textContent = '';
        textLine4.textContent = '';
    } else if (scorePlayer > scoreComputer) {
        textLine1.textContent = "Your score: " + scorePlayer + " ; Computer's score: " + scoreComputer
        textLine2.textContent = "Game finished! Congratulations! You win!"
        textLine3.textContent = '';
        textLine4.textContent = '';
    } else {
        textLine1.textContent = "Your score: " + scorePlayer + " ; Computer's score: " + scoreComputer
        textLine2.textContent = "Game over! You lose! Better luck next time!"
        textLine3.textContent = '';
        textLine4.textContent = '';
    }
} else {
    textLine1.textContent = "Round: " + round
    let playerSelection = "Rock";
    let computerSelection = options[Math.floor(Math.random() * options.length)];
    if ((playerSelection === "Rock") && (computerSelection === "Paper")) {
        textLine2.textContent = "Your choice: " + playerSelection + " ; Computer's choice: " + computerSelection
        textLine3.textContent = "You lose! Paper beats Rock!"
        scoreComputer++
        textLine2.textContent = "Your score: " + scorePlayer + " ; Computer's score: " + scoreComputer
    } else if (((playerSelection === "Paper") && (computerSelection === "Paper"))) {
        textLine2.textContent = "Your choice: " + playerSelection + " ; Computer's choice: " + computerSelection
        textLine3.textContent = "It's a tie, so no points!"
        textLine4.textContent = "Your score: " + scorePlayer + " ; Computer's score: " + scoreComputer
    } else if (((playerSelection === "Scissors") && (computerSelection === "Paper"))) {
        textLine2.textContent = "Your choice: " + playerSelection + " ; Computer's choice: " + computerSelection
        textLine3.textContent = "You win! Scissors beat Paper!"
        scorePlayer++
        textLine4.textContent = "Your score: " + scorePlayer + " ; Computer's score: " + scoreComputer
    } else if ((playerSelection === "Rock") && (computerSelection === "Rock")) {
        textLine2.textContent = "Your choice: " + playerSelection + " ; Computer's choice: " + computerSelection
        textLine3.textContent = "It's a tie, so no points!"
        textLine4.textContent = "Your score: " + scorePlayer + " ; Computer's score: " + scoreComputer
    } else if ((playerSelection === "Paper") && (computerSelection === "Rock")) {
        textLine2.textContent = "Your choice: " + playerSelection + " ; Computer's choice: " + computerSelection
        textLine3.textContent = "You win! Paper beats Rock!"
        scorePlayer++
        textLine4.textContent = "Your score: " + scorePlayer + " ; Computer's score: " + scoreComputer
    } else if ((playerSelection === "Scissors") && (computerSelection === "Rock")) {
        textLine2.textContent = "Your choice: " + playerSelection + " ; Computer's choice: " + computerSelection
        textLine3.textContent = "You lose! Rock beats Scissors!"
        scoreComputer++
        textLine4.textContent = "Your score: " + scorePlayer + " ; Computer's score: " + scoreComputer
    } else if ((playerSelection === "Rock") && (computerSelection === "Scissors")) {
        textLine2.textContent = "Your choice: " + playerSelection + " ; Computer's choice: " + computerSelection
        textLine3.textContent = "You win! Rock beats Scissors!"
        scorePlayer++
        textLine4.textContent = "Your score: " + scorePlayer + " ; Computer's score: " + scoreComputer
    } else if ((playerSelection === "Paper") && (computerSelection === "Scissors")) {
        textLine2.textContent = "Your choice: " + playerSelection + " ; Computer's choice: " + computerSelection
        textLine3.textContent = "You lose! Scissors beat Paper!"
        scoreComputer++
        textLine4.textContent = "Your score: " + scorePlayer + " ; Computer's score: " + scoreComputer
    } else if ((playerSelection === "Scissors") && (computerSelection === "Scissors")) {
        textLine2.textContent = "Your choice: " + playerSelection + " ; Computer's choice: " + computerSelection
        textLine3.textContent = "It's a tie, so no points!"
        textLine4.textContent = "Your score: " + scorePlayer + " ; Computer's score: " + scoreComputer
    } else {
        textLine3.textContent = "Something went very wrong! Check your input!"
    }
    round++
}
}
function playerChoicePaper() {
    if ((scorePlayer > 4) || (scoreComputer > 4)) {
        btnRock.removeEventListener('click', playerChoiceRock);
        btnScissors.removeEventListener('click', playerChoiceScissors);  
        btnPaper.removeEventListener('click', playerChoicePaper); 
        if (scorePlayer == scoreComputer) {
            textLine1.textContent = "Your score: " + scorePlayer + " ; Computer's score: " + scoreComputer
            textLine2.textContent = "Game finished! It's a tie!"
            textLine3.textContent = '';
            textLine4.textContent = '';
        } else if (scorePlayer > scoreComputer) {
            textLine1.textContent = "Your score: " + scorePlayer + " ; Computer's score: " + scoreComputer
            textLine2.textContent = "Game finished! Congratulations! You win!"
            textLine3.textContent = '';
            textLine4.textContent = '';
        } else {
            textLine1.textContent = "Your score: " + scorePlayer + " ; Computer's score: " + scoreComputer
            textLine2.textContent = "Game over! You lose! Better luck next time!"
            textLine3.textContent = '';
            textLine4.textContent = '';
        } 
    } else {
    textLine1.textContent = "Round: " + round
    let playerSelection = "Paper";
    let computerSelection = options[Math.floor(Math.random() * options.length)];
    if ((playerSelection === "Rock") && (computerSelection === "Paper")) {
        textLine2.textContent = "Your choice: " + playerSelection + " ; Computer's choice: " + computerSelection
        textLine3.textContent = "You lose! Paper beats Rock!"
        scoreComputer++
        textLine4.textContent = "Your score: " + scorePlayer + " ; Computer's score: " + scoreComputer
    } else if (((playerSelection === "Paper") && (computerSelection === "Paper"))) {
        textLine2.textContent = "Your choice: " + playerSelection + " ; Computer's choice: " + computerSelection
        textLine3.textContent = "It's a tie, so no points!"
        textLine4.textContent = "Your score: " + scorePlayer + " ; Computer's score: " + scoreComputer
    } else if (((playerSelection === "Scissors") && (computerSelection === "Paper"))) {
        textLine2.textContent = "Your choice: " + playerSelection + " ; Computer's choice: " + computerSelection
        textLine3.textContent = "You win! Scissors beat Paper!"
        scorePlayer++
        textLine4.textContent = "Your score: " + scorePlayer + " ; Computer's score: " + scoreComputer
    } else if ((playerSelection === "Rock") && (computerSelection === "Rock")) {
        textLine2.textContent = "Your choice: " + playerSelection + " ; Computer's choice: " + computerSelection
        textLine3.textContent = "It's a tie, so no points!"
        textLine4.textContent = "Your score: " + scorePlayer + " ; Computer's score: " + scoreComputer
    } else if ((playerSelection === "Paper") && (computerSelection === "Rock")) {
        textLine2.textContent = "Your choice: " + playerSelection + " ; Computer's choice: " + computerSelection
        textLine3.textContent = "You win! Paper beats Rock!"
        scorePlayer++
        textLine4.textContent = "Your score: " + scorePlayer + " ; Computer's score: " + scoreComputer
    } else if ((playerSelection === "Scissors") && (computerSelection === "Rock")) {
        textLine2.textContent = "Your choice: " + playerSelection + " ; Computer's choice: " + computerSelection
        textLine3.textContent = "You lose! Rock beats Scissors!"
        scoreComputer++
        textLine4.textContent = "Your score: " + scorePlayer + " ; Computer's score: " + scoreComputer
    } else if ((playerSelection === "Rock") && (computerSelection === "Scissors")) {
        textLine2.textContent = "Your choice: " + playerSelection + " ; Computer's choice: " + computerSelection
        textLine3.textContent = "You win! Rock beats Scissors!"
        scorePlayer++
        textLine4.textContent = "Your score: " + scorePlayer + " ; Computer's score: " + scoreComputer
    } else if ((playerSelection === "Paper") && (computerSelection === "Scissors")) {
        textLine2.textContent = "Your choice: " + playerSelection + " ; Computer's choice: " + computerSelection
        textLine3.textContent = "You lose! Scissors beat Paper!"
        scoreComputer++
        textLine4.textContent = "Your score: " + scorePlayer + " ; Computer's score: " + scoreComputer
    } else if ((playerSelection === "Scissors") && (computerSelection === "Scissors")) {
        textLine2.textContent = "Your choice: " + playerSelection + " ; Computer's choice: " + computerSelection
        textLine3.textContent = "It's a tie, so no points!"
        textLine4.textContent = "Your score: " + scorePlayer + " ; Computer's score: " + scoreComputer
    } else {
        textLine3.textContent = "Something went very wrong! Check your input!"
    }
    round++
    }
}
function playerChoiceScissors() {
    if ((scorePlayer > 4) || (scoreComputer > 4)) {
        btnRock.removeEventListener('click', playerChoiceRock);
        btnScissors.removeEventListener('click', playerChoiceScissors);  
        btnPaper.removeEventListener('click', playerChoicePaper); 
        if (scorePlayer == scoreComputer) {
            textLine1.textContent = "Your score: " + scorePlayer + " ; Computer's score: " + scoreComputer
            textLine2.textContent = "Game finished! It's a tie!"
            textLine3.textContent = '';
            textLine4.textContent = '';
        } else if (scorePlayer > scoreComputer) {
            textLine1.textContent = "Your score: " + scorePlayer + " ; Computer's score: " + scoreComputer
            textLine2.textContent = "Game finished! Congratulations! You win!"
            textLine3.textContent = '';
            textLine4.textContent = '';
        } else {
            textLine1.textContent = "Your score: " + scorePlayer + " ; Computer's score: " + scoreComputer
            textLine2.textContent = "Game over! You lose! Better luck next time!"
            textLine3.textContent = '';
            textLine4.textContent = '';
        }
    } else {
    textLine1.textContent = "Round: " + round
    let playerSelection = "Scissors";
    let computerSelection = options[Math.floor(Math.random() * options.length)];
    if ((playerSelection === "Rock") && (computerSelection === "Paper")) {
        textLine2.textContent = "Your choice: " + playerSelection + " ; Computer's choice: " + computerSelection
        textLine3.textContent = "You lose! Paper beats Rock!"
        scoreComputer++
        textLine4.textContent = "Your score: " + scorePlayer + " ; Computer's score: " + scoreComputer
    } else if (((playerSelection === "Paper") && (computerSelection === "Paper"))) {
        textLine2.textContent = "Your choice: " + playerSelection + " ; Computer's choice: " + computerSelection
        textLine3.textContent = "It's a tie, so no points!"
        textLine4.textContent = "Your score: " + scorePlayer + " ; Computer's score: " + scoreComputer
    } else if (((playerSelection === "Scissors") && (computerSelection === "Paper"))) {
        textLine2.textContent = "Your choice: " + playerSelection + " ; Computer's choice: " + computerSelection
        textLine3.textContent = "You win! Scissors beat Paper!"
        scorePlayer++
        textLine4.textContent = "Your score: " + scorePlayer + " ; Computer's score: " + scoreComputer
    } else if ((playerSelection === "Rock") && (computerSelection === "Rock")) {
        textLine2.textContent = "Your choice: " + playerSelection + " ; Computer's choice: " + computerSelection
        textLine3.textContent = "It's a tie, so no points!"
        textLine4.textContent = "Your score: " + scorePlayer + " ; Computer's score: " + scoreComputer
    } else if ((playerSelection === "Paper") && (computerSelection === "Rock")) {
        textLine2.textContent = "Your choice: " + playerSelection + " ; Computer's choice: " + computerSelection
        textLine3.textContent = "You win! Paper beats Rock!"
        scorePlayer++
        textLine4.textContent = "Your score: " + scorePlayer + " ; Computer's score: " + scoreComputer
    } else if ((playerSelection === "Scissors") && (computerSelection === "Rock")) {
        textLine2.textContent = "Your choice: " + playerSelection + " ; Computer's choice: " + computerSelection
        textLine3.textContent = "You lose! Rock beats Scissors!"
        scoreComputer++
        textLine4.textContent = "Your score: " + scorePlayer + " ; Computer's score: " + scoreComputer
    } else if ((playerSelection === "Rock") && (computerSelection === "Scissors")) {
        textLine2.textContent = "Your choice: " + playerSelection + " ; Computer's choice: " + computerSelection
        textLine3.textContent = "You win! Rock beats Scissors!"
        scorePlayer++
        textLine4.textContent = "Your score: " + scorePlayer + " ; Computer's score: " + scoreComputer
    } else if ((playerSelection === "Paper") && (computerSelection === "Scissors")) {
        textLine2.textContent = "Your choice: " + playerSelection + " ; Computer's choice: " + computerSelection
        textLine3.textContent = "You lose! Scissors beat Paper!"
        scoreComputer++
        textLine4.textContent = "Your score: " + scorePlayer + " ; Computer's score: " + scoreComputer
    } else if ((playerSelection === "Scissors") && (computerSelection === "Scissors")) {
        textLine2.textContent = "Your choice: " + playerSelection + " ; Computer's choice: " + computerSelection
        textLine3.textContent = "It's a tie, so no points!"
        textLine4.textContent = "Your score: " + scorePlayer + " ; Computer's score: " + scoreComputer
    } else {
        textLine3.textContent = "Something went very wrong! Check your input!"
    }
    round++
}
}

btnRock.addEventListener('click', playerChoiceRock);
btnPaper.addEventListener('click', playerChoicePaper);
btnScissors.addEventListener('click', playerChoiceScissors);


