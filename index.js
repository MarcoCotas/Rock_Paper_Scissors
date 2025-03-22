
/*
Create a function getHumanChoice to return the user input value (Rock, Paper, Scissors)
Get computer random choice (Math.random)
Compare the two choices and determine the winner
Track results and display the winner in variables humanScore and computerScore
*/



function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    let human;
    human = prompt("Choose wisely: Rock - Paper - Scissors");

    return human.charAt(0).toUpperCase() + human.slice(1).toLowerCase();
}

function playRound(cpu, men) {
    if (men === cpu) {
        console.log("It's a tie!");
        return [0, 0];  // Tie 
    } else if (
        (men === "Rock" && cpu === "Scissors") ||
        (men === "Scissors" && cpu === "Paper") ||
        (men === "Paper" && cpu === "Rock")
    ) {
        console.log(`You win! ${men} beats ${cpu}`);
        return [1, 0];  // Human Victory
    } else {
        console.log(`You lose! ${cpu} beats ${men}`);
        return [0, 1];  // CPU Victory
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const cpu = getComputerChoice();
        const men = getHumanChoice();
        console.log(`Round ${i + 1}: You chose ${men}, Computer chose ${cpu}`);

        let [hScore, cScore] = playRound(cpu, men);
        humanScore += hScore;
        computerScore += cScore;
        
        console.log(`Current Score -> You: ${humanScore} | Computer: ${computerScore}`);
    }

    // Final Winner
    if (humanScore > computerScore) {
        console.log("🎉 Congrats, you win the game!");
    } else if (humanScore < computerScore) {
        console.log("💀 You lost the game. Better luck next time!");
    } else {
        console.log("🤝 It's a tie overall!");
    }
}

// Start the game
playGame();
