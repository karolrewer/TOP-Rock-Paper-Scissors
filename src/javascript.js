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


// playRound (playerSelection, computerSelection) {
//     
// }
let scorePlayer = 0
let scoreComputer = 0

for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Enter your choice: rock, paper or scissors?");
    let computerSelection = "paper";
    if ((playerSelection.toLowerCase() === "rock") && (computerSelection == "paper")) {
        console.log("You lose! Paper beats Rock!")
        scoreComputer++
        console.log("Your score:" + scorePlayer + " ; Computer's score: " + scoreComputer)
    } else if (((playerSelection.toLowerCase() === "paper") && (computerSelection == "paper"))) {
        console.log("It's a tie, so no points!")
        console.log("Your score:" + scorePlayer + " ; Computer's score: " + scoreComputer)
    } else if (((playerSelection.toLowerCase() === "scissors") && (computerSelection == "paper"))) {
        console.log("You win! Scissors beat Paper!")
        scorePlayer++
        console.log("Your score:" + scorePlayer + " ; Computer's score: " + scoreComputer)
    } else if ((playerSelection.toLowerCase() === "rock") && (computerSelection == "rock")) {
        console.log("It's a tie, so no points!")
        console.log("Your score:" + scorePlayer + " ; Computer's score: " + scoreComputer)
    } else if ((playerSelection.toLowerCase() === "paper") && (computerSelection == "rock")) {
        console.log("You win! Scissors beat Paper!")
        scorePlayer++
        console.log("Your score:" + scorePlayer + " ; Computer's score: " + scoreComputer)
    } else if ((playerSelection.toLowerCase() === "scissors") && (computerSelection == "rock")) {
        console.log("You lose! Paper beats Rock!")
        scoreComputer++
        console.log("Your score:" + scorePlayer + " ; Computer's score: " + scoreComputer)
    } else if ((playerSelection.toLowerCase() === "rock") && (computerSelection == "scissors")) {
        console.log("You win! Scissors beat Paper!")
        scorePlayer++
        console.log("Your score:" + scorePlayer + " ; Computer's score: " + scoreComputer)
    } else if ((playerSelection.toLowerCase() === "paper") && (computerSelection == "scissors")) {
        console.log("You lose! Paper beats Rock!")
        scoreComputer++
        console.log("Your score:" + scorePlayer + " ; Computer's score: " + scoreComputer)
    } else if ((playerSelection.toLowerCase() === "scissors") && (computerSelection == "scissors")) {
        console.log("It's a tie, so no points!")
        console.log("Your score:" + scorePlayer + " ; Computer's score: " + scoreComputer)
    } else {
        console.log("Something went very wront! Check your input!")
    }
}



if (scorePlayer == scoreComputer) {
        console.log("It's a tie!")
    } else if (scorePlayer > scoreComputer) {
        console.log("Contratulations! You win!")
    } else {
        console.log("You lose! Better luck next time!")
    }


