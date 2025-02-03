function getHumanChoice() {
    return prompt('Enter "Rock, Paper, or Scissors"').toLowerCase(); 
}

// console.log(getHumanChoice());

function getComputerChoice() {
    return Math.random();
}

if (getComputerChoice() >= 0.7) {
    console.log("rock");
} else if (getComputerChoice() <= 0.4) {
    console.log("paper");
} else {
    console.log("scissors");
}

let humanScore = 0;
let computerScore = 0; 

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

function playRound(humanChoice, computerChoice) {

}

if (humanChoice === computerChoice) {
    alert("Draw");
}
