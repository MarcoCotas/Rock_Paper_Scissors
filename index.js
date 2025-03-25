const game = document.querySelector("#game");
const currentResult = document.querySelector("#current-result");
const humanChoice = document.querySelector("#human-choice");
const computerChoice = document.querySelector("#computer-choice");
const roundResult = document.querySelector("#round-result");
const finalScore = document.querySelector("#final-score");
const buttons = document.querySelectorAll("button");

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(cpu, men) {
  humanChoice.textContent = `Your Choice was ${men}`;
  computerChoice.textContent = `CPU Choice was ${cpu}`;

  if (men === cpu) {
    roundResult.textContent = "It's a tie!";
    return [0, 0];
  } else if (
    (men === "Rock" && cpu === "Scissors") ||
    (men === "Scissors" && cpu === "Paper") ||
    (men === "Paper" && cpu === "Rock")
  ) {
    roundResult.textContent = `You win! ${men} beats ${cpu}`;
    return [1, 0];
  } else {
    roundResult.textContent = `You lose! ${cpu} beats ${men} `;
    return [0, 1];
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const cpu = getComputerChoice();

      const men =
        button.id.charAt(0).toUpperCase() + button.id.slice(1).toLowerCase();

      currentResult.textContent = `The current result is: You: ${men} vs CPU ${cpu}`;

      let [hScore, cScore] = playRound(cpu, men);
      humanScore += hScore;
      computerScore += cScore;

      // Atualizar placar
      finalScore.textContent = `Score - You: ${humanScore} | CPU: ${computerScore}`;

      if (humanScore === 5 || computerScore === 5) {
        if (humanScore > computerScore) {
          finalScore.textContent = `🎉 Congrats, you win the game!`;
        } else if (humanScore < computerScore) {
          finalScore.textContent = `💀 You lost the game. Better luck next time!`;
        }
        buttons.forEach((btn) => (btn.disabled = true));
      }
    });
  });
}

playGame();
