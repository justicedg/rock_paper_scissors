// return random integer from computer
function getComputerChoice() {
    const computerChoice = Math.random();
// convert random integer into strings
    if (computerChoice >= 0.7) {
        return "rock";
    } else if (computerChoice <= 0.4) {
        return "paper";
    } else {
        return "scissors";
    }
}
// console.log(getComputerChoice());
// get user's choice
function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
    return humanChoice;
    // console.log(humanChoice); 
}
// console.log(getHumanChoice());
// initialize score
let humanScore = 0;
let computerScore = 0; 
// play a single round
function playRound() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    
    if (humanChoice == computerChoice) {
        console.log("DRAW!")
        }
    else if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You lose! Paper beats rock!")
        computerScore++
    }
    else if (humanChoice == "rock" && computerChoice == "scissors"){
        console.log("You win! Rock beats scissors!")
        humanScore++
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win! Paper beats rock!")
        humanScore++
    }
     else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You lose! Scissors beats paper!")
        computerScore++
     }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win! Scissors beats paper!")
        humanScore++
    }
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You lose!")
        computerScore++
    }                
    console.log(humanScore, computerScore)  
}

function playGame() {
    playRound()
    playRound()
    playRound()
    playRound()
    playRound()
        if (computerScore > humanScore) {
            console.log("You lost to a computer!")
    } 
        else if (computerScore < humanScore) {
            console.log("You won against a computer!")
    }
        else if (computerScore === humanScore){
            console.log("It's a tie!")
    }
    }playGame();