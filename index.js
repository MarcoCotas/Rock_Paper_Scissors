const game = document.querySelector("#game");
const currentResult = document.querySelector("#current-result");
const humanChoice = document.querySelector("#human-choice");
const computerChoice = document.querySelector("#computer-choice");
const roundResult = document.querySelector("#round-result");
const finalScore = document.querySelector("#final-Score");
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
  } else if (
    (men === "Rock" && cpu === "Scissors") ||
    (men === "Scissors" && cpu === "Paper") ||
    (men === "Paper" && cpu === "Rock")
  ) {
    roundResult.textContent = `You win! ${men} beats ${cpu}`;
  } else {
    roundResult.textContent = `You lose! ${cpu} beats ${men} `;
  }
}

// Start the game

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const cpu = getComputerChoice();

    const men =
      button.id.charAt(0).toUpperCase() + button.id.slice(1).toLowerCase();
    playRound(cpu, men);
  });
});
