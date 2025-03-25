function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(cpu, men) {
  if (men === cpu) {
    console.log("It's a tie!");
  } else if (
    (men === "Rock" && cpu === "Scissors") ||
    (men === "Scissors" && cpu === "Paper") ||
    (men === "Paper" && cpu === "Rock")
  ) {
    console.log(`You win! ${men} beats ${cpu}`);
  } else {
    console.log(`You lose! ${cpu} beats ${men}`);
  }
}

// Start the game

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const cpu = getComputerChoice();

    const men =
      button.id.charAt(0).toUpperCase() + button.id.slice(1).toLowerCase();
    alert(`You choose ${men} and CPU choose ${cpu}`);
    playRound(cpu, men);
  });
});

const game = document.querySelector("game");
const currentResult = document.querySelector("current-result");
const humanChoice = document.querySelector("human-choice");
const computerChoice = document.querySelector("computer-choice");
const roundResult = document.querySelector("roundResult");
const finalScore = document.querySelector("final-score");
