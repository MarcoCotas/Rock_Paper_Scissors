
/*
Create a function getHumanChoice to return the user input value (Rock, Paper, Scissors)
Get computer random choice (Math.random)
Compare the two choices and determine the winner
Track results and display the winner in variables humanScore and computerScore
*/



function getComputerChoice(num){
    const random = Math.floor (Math.random() * num);
    if (random == 0){
        return(  "Rock");
    } else if (random == 1) {
        return(  "Scissors");
    } else {
        return( "Paper");
    }
}
function getHumanChoice(){
    const human = prompt("Choose wisely: Rock - Paper - Scissors");
    return human.charAt(0).toUpperCase() + human.slice(1).toLowerCase();
}

function playRound (cpu, men, computerScore, humanScore) {
    if (men == cpu){
        console.log ("tie");
    } else if 
        (men == "Rock" && cpu == "Scissors" ||
        men == "Scissors" && cpu == "Paper" ||
        men == "Paper" && cpu =="Rock"){
        console.log ("win");
        humanScore++;
    } else {
        console.log("lose");
        computerScore++;
           
    }   
    return computerScore && humanScore;
}

function playGame(){
    
    humanScore = 0
    computerScore = 0
    
    for (let i = 0; i<5; i++){
    const cpu = getComputerChoice(3);
    const men = getHumanChoice();
    
    playRound(cpu, men, humanScore, computerScore);
    if (i == 5 && humanScore > computerScore){
        console.log ("congrats, you win");
    } else if (i == 5 && humanScore < computerScore){
        console.log("You Suck")
    }
}
}

playGame()