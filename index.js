
/*
Create a function getHumanChoice to return the user input value (Rock, Paper, Scissors)
Get computer random choice (Math.random)
Compare the two choices and determine the winner
Track results and display the winner in variables humanScore and computerScore
*/

let computer = getComputerChoice();
let human =  getHumanChoice();   
console.log(human);
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let option = Math.random() * 3;
    if (option < 1) {
        return "Rock";
    } else if (option < 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Enter Rock Paper or Scissors");
    final =  choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
    return final;
}

