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
const options = ["rock", "paper", "scissors"]

for (let i = 0; i < 5; i++) {
    console.log("Round: " + round)
    let playerSelection = prompt("Enter your choice: rock, paper or scissors?");
    let computerSelection = options[Math.floor(Math.random() * options.length)];
    if ((playerSelection.toLowerCase() === "rock") && (computerSelection === "paper")) {
        console.log("Your choice: " + playerSelection + " ; Computer's choice: " + computerSelection)
        console.log("You lose! Paper beats Rock!")
        scoreComputer++
        console.log("Your score: " + scorePlayer + " ; Computer's score: " + scoreComputer)
    } else if (((playerSelection.toLowerCase() === "paper") && (computerSelection === "paper"))) {
        console.log("Your choice: " + playerSelection + " ; Computer's choice: " + computerSelection)
        console.log("It's a tie, so no points!")
        console.log("Your score: " + scorePlayer + " ; Computer's score: " + scoreComputer)
    } else if (((playerSelection.toLowerCase() === "scissors") && (computerSelection === "paper"))) {
        console.log("Your choice: " + playerSelection + " ; Computer's choice: " + computerSelection)
        console.log("You win! Scissors beat Paper!")
        scorePlayer++
        console.log("Your score: " + scorePlayer + " ; Computer's score: " + scoreComputer)
    } else if ((playerSelection.toLowerCase() === "rock") && (computerSelection === "rock")) {
        console.log("Your choice: " + playerSelection + " ; Computer's choice: " + computerSelection)
        console.log("It's a tie, so no points!")
        console.log("Your score: " + scorePlayer + " ; Computer's score: " + scoreComputer)
    } else if ((playerSelection.toLowerCase() === "paper") && (computerSelection === "rock")) {
        console.log("Your choice: " + playerSelection + " ; Computer's choice: " + computerSelection)
        console.log("You win! Paper beats Rock!")
        scorePlayer++
        console.log("Your score: " + scorePlayer + " ; Computer's score: " + scoreComputer)
    } else if ((playerSelection.toLowerCase() === "scissors") && (computerSelection === "rock")) {
        console.log("Your choice: " + playerSelection + " ; Computer's choice: " + computerSelection)
        console.log("You lose! Rock beats Scissors!")
        scoreComputer++
        console.log("Your score: " + scorePlayer + " ; Computer's score: " + scoreComputer)
    } else if ((playerSelection.toLowerCase() === "rock") && (computerSelection === "scissors")) {
        console.log("Your choice: " + playerSelection + " ; Computer's choice: " + computerSelection)
        console.log("You win! Rock beats Scissors!")
        scorePlayer++
        console.log("Your score: " + scorePlayer + " ; Computer's score: " + scoreComputer)
    } else if ((playerSelection.toLowerCase() === "paper") && (computerSelection === "scissors")) {
        console.log("Your choice: " + playerSelection + " ; Computer's choice: " + computerSelection)
        console.log("You lose! Scissors beat Paper!")
        scoreComputer++
        console.log("Your score: " + scorePlayer + " ; Computer's score: " + scoreComputer)
    } else if ((playerSelection.toLowerCase() === "scissors") && (computerSelection === "scissors")) {
        console.log("Your choice: " + playerSelection + " ; Computer's choice: " + computerSelection)
        console.log("It's a tie, so no points!")
        console.log("Your score: " + scorePlayer + " ; Computer's score: " + scoreComputer)
    } else {
        console.log("Something went very wrong! Check your input!")
    }
    round++
}



if (scorePlayer == scoreComputer) {
        console.log("Game finished! It's a tie!")
    } else if (scorePlayer > scoreComputer) {
        console.log("Game finished! Congratulations! You win!")
    } else {
        console.log("Game over! You lose! Better luck next time!")
    }


