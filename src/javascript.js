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

function playerChoiceRock() {
    if ((scorePlayer > 4) || (scoreComputer > 4)) {
    btnRock.removeEventListener('click', playerChoiceRock);
    btnScissors.removeEventListener('click', playerChoiceScissors);  
    btnPaper.removeEventListener('click', playerChoicePaper); 
    if (scorePlayer == scoreComputer) {
        console.log("Game finished! It's a tie!")
    } else if (scorePlayer > scoreComputer) {
        console.log("Game finished! Congratulations! You win!")
    } else {
        console.log("Game over! You lose! Better luck next time!")
    }
} else {
    console.log("Round: " + round)
    let playerSelection = "Rock";
    let computerSelection = options[Math.floor(Math.random() * options.length)];
    if ((playerSelection === "Rock") && (computerSelection === "Paper")) {
        console.log("Your choice: " + playerSelection + " ; Computer's choice: " + computerSelection)
        console.log("You lose! Paper beats Rock!")
        scoreComputer++
        console.log("Your score: " + scorePlayer + " ; Computer's score: " + scoreComputer)
    } else if (((playerSelection === "Paper") && (computerSelection === "Paper"))) {
        console.log("Your choice: " + playerSelection + " ; Computer's choice: " + computerSelection)
        console.log("It's a tie, so no points!")
        console.log("Your score: " + scorePlayer + " ; Computer's score: " + scoreComputer)
    } else if (((playerSelection === "Scissors") && (computerSelection === "Paper"))) {
        console.log("Your choice: " + playerSelection + " ; Computer's choice: " + computerSelection)
        console.log("You win! Scissors beat Paper!")
        scorePlayer++
        console.log("Your score: " + scorePlayer + " ; Computer's score: " + scoreComputer)
    } else if ((playerSelection === "Rock") && (computerSelection === "Rock")) {
        console.log("Your choice: " + playerSelection + " ; Computer's choice: " + computerSelection)
        console.log("It's a tie, so no points!")
        console.log("Your score: " + scorePlayer + " ; Computer's score: " + scoreComputer)
    } else if ((playerSelection === "Paper") && (computerSelection === "Rock")) {
        console.log("Your choice: " + playerSelection + " ; Computer's choice: " + computerSelection)
        console.log("You win! Paper beats Rock!")
        scorePlayer++
        console.log("Your score: " + scorePlayer + " ; Computer's score: " + scoreComputer)
    } else if ((playerSelection === "Scissors") && (computerSelection === "Rock")) {
        console.log("Your choice: " + playerSelection + " ; Computer's choice: " + computerSelection)
        console.log("You lose! Rock beats Scissors!")
        scoreComputer++
        console.log("Your score: " + scorePlayer + " ; Computer's score: " + scoreComputer)
    } else if ((playerSelection === "Rock") && (computerSelection === "Scissors")) {
        console.log("Your choice: " + playerSelection + " ; Computer's choice: " + computerSelection)
        console.log("You win! Rock beats Scissors!")
        scorePlayer++
        console.log("Your score: " + scorePlayer + " ; Computer's score: " + scoreComputer)
    } else if ((playerSelection === "Paper") && (computerSelection === "Scissors")) {
        console.log("Your choice: " + playerSelection + " ; Computer's choice: " + computerSelection)
        console.log("You lose! Scissors beat Paper!")
        scoreComputer++
        console.log("Your score: " + scorePlayer + " ; Computer's score: " + scoreComputer)
    } else if ((playerSelection === "Scissors") && (computerSelection === "Scissors")) {
        console.log("Your choice: " + playerSelection + " ; Computer's choice: " + computerSelection)
        console.log("It's a tie, so no points!")
        console.log("Your score: " + scorePlayer + " ; Computer's score: " + scoreComputer)
    } else {
        console.log("Something went very wrong! Check your input!")
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
            console.log("Game finished! It's a tie!")
        } else if (scorePlayer > scoreComputer) {
            console.log("Game finished! Congratulations! You win!")
        } else {
            console.log("Game over! You lose! Better luck next time!")
        }
    } else {
    console.log("Round: " + round)
    let playerSelection = "Paper";
    let computerSelection = options[Math.floor(Math.random() * options.length)];
    if ((playerSelection === "Rock") && (computerSelection === "Paper")) {
        console.log("Your choice: " + playerSelection + " ; Computer's choice: " + computerSelection)
        console.log("You lose! Paper beats Rock!")
        scoreComputer++
        console.log("Your score: " + scorePlayer + " ; Computer's score: " + scoreComputer)
    } else if (((playerSelection === "Paper") && (computerSelection === "Paper"))) {
        console.log("Your choice: " + playerSelection + " ; Computer's choice: " + computerSelection)
        console.log("It's a tie, so no points!")
        console.log("Your score: " + scorePlayer + " ; Computer's score: " + scoreComputer)
    } else if (((playerSelection === "Scissors") && (computerSelection === "Paper"))) {
        console.log("Your choice: " + playerSelection + " ; Computer's choice: " + computerSelection)
        console.log("You win! Scissors beat Paper!")
        scorePlayer++
        console.log("Your score: " + scorePlayer + " ; Computer's score: " + scoreComputer)
    } else if ((playerSelection === "Rock") && (computerSelection === "Rock")) {
        console.log("Your choice: " + playerSelection + " ; Computer's choice: " + computerSelection)
        console.log("It's a tie, so no points!")
        console.log("Your score: " + scorePlayer + " ; Computer's score: " + scoreComputer)
    } else if ((playerSelection === "Paper") && (computerSelection === "Rock")) {
        console.log("Your choice: " + playerSelection + " ; Computer's choice: " + computerSelection)
        console.log("You win! Paper beats Rock!")
        scorePlayer++
        console.log("Your score: " + scorePlayer + " ; Computer's score: " + scoreComputer)
    } else if ((playerSelection === "Scissors") && (computerSelection === "Rock")) {
        console.log("Your choice: " + playerSelection + " ; Computer's choice: " + computerSelection)
        console.log("You lose! Rock beats Scissors!")
        scoreComputer++
        console.log("Your score: " + scorePlayer + " ; Computer's score: " + scoreComputer)
    } else if ((playerSelection === "Rock") && (computerSelection === "Scissors")) {
        console.log("Your choice: " + playerSelection + " ; Computer's choice: " + computerSelection)
        console.log("You win! Rock beats Scissors!")
        scorePlayer++
        console.log("Your score: " + scorePlayer + " ; Computer's score: " + scoreComputer)
    } else if ((playerSelection === "Paper") && (computerSelection === "Scissors")) {
        console.log("Your choice: " + playerSelection + " ; Computer's choice: " + computerSelection)
        console.log("You lose! Scissors beat Paper!")
        scoreComputer++
        console.log("Your score: " + scorePlayer + " ; Computer's score: " + scoreComputer)
    } else if ((playerSelection === "Scissors") && (computerSelection === "Scissors")) {
        console.log("Your choice: " + playerSelection + " ; Computer's choice: " + computerSelection)
        console.log("It's a tie, so no points!")
        console.log("Your score: " + scorePlayer + " ; Computer's score: " + scoreComputer)
    } else {
        console.log("Something went very wrong! Check your input!")
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
        console.log("Game finished! It's a tie!")
    } else if (scorePlayer > scoreComputer) {
        console.log("Game finished! Congratulations! You win!")
    } else {
        console.log("Game over! You lose! Better luck next time!")
    }
} else {
    console.log("Round: " + round)
    let playerSelection = "Scissors";
    let computerSelection = options[Math.floor(Math.random() * options.length)];
    if ((playerSelection === "Rock") && (computerSelection === "Paper")) {
        console.log("Your choice: " + playerSelection + " ; Computer's choice: " + computerSelection)
        console.log("You lose! Paper beats Rock!")
        scoreComputer++
        console.log("Your score: " + scorePlayer + " ; Computer's score: " + scoreComputer)
    } else if (((playerSelection === "Paper") && (computerSelection === "Paper"))) {
        console.log("Your choice: " + playerSelection + " ; Computer's choice: " + computerSelection)
        console.log("It's a tie, so no points!")
        console.log("Your score: " + scorePlayer + " ; Computer's score: " + scoreComputer)
    } else if (((playerSelection === "Scissors") && (computerSelection === "Paper"))) {
        console.log("Your choice: " + playerSelection + " ; Computer's choice: " + computerSelection)
        console.log("You win! Scissors beat Paper!")
        scorePlayer++
        console.log("Your score: " + scorePlayer + " ; Computer's score: " + scoreComputer)
    } else if ((playerSelection === "Rock") && (computerSelection === "Rock")) {
        console.log("Your choice: " + playerSelection + " ; Computer's choice: " + computerSelection)
        console.log("It's a tie, so no points!")
        console.log("Your score: " + scorePlayer + " ; Computer's score: " + scoreComputer)
    } else if ((playerSelection === "Paper") && (computerSelection === "Rock")) {
        console.log("Your choice: " + playerSelection + " ; Computer's choice: " + computerSelection)
        console.log("You win! Paper beats Rock!")
        scorePlayer++
        console.log("Your score: " + scorePlayer + " ; Computer's score: " + scoreComputer)
    } else if ((playerSelection === "Scissors") && (computerSelection === "Rock")) {
        console.log("Your choice: " + playerSelection + " ; Computer's choice: " + computerSelection)
        console.log("You lose! Rock beats Scissors!")
        scoreComputer++
        console.log("Your score: " + scorePlayer + " ; Computer's score: " + scoreComputer)
    } else if ((playerSelection === "Rock") && (computerSelection === "Scissors")) {
        console.log("Your choice: " + playerSelection + " ; Computer's choice: " + computerSelection)
        console.log("You win! Rock beats Scissors!")
        scorePlayer++
        console.log("Your score: " + scorePlayer + " ; Computer's score: " + scoreComputer)
    } else if ((playerSelection === "Paper") && (computerSelection === "Scissors")) {
        console.log("Your choice: " + playerSelection + " ; Computer's choice: " + computerSelection)
        console.log("You lose! Scissors beat Paper!")
        scoreComputer++
        console.log("Your score: " + scorePlayer + " ; Computer's score: " + scoreComputer)
    } else if ((playerSelection === "Scissors") && (computerSelection === "Scissors")) {
        console.log("Your choice: " + playerSelection + " ; Computer's choice: " + computerSelection)
        console.log("It's a tie, so no points!")
        console.log("Your score: " + scorePlayer + " ; Computer's score: " + scoreComputer)
    } else {
        console.log("Something went very wrong! Check your input!")
    }
    round++
}
}

btnRock.addEventListener('click', playerChoiceRock);
btnPaper.addEventListener('click', playerChoicePaper);
btnScissors.addEventListener('click', playerChoiceScissors);


