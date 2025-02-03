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

function getHumanChoice() {
    prompt('Enter "Rock, Paper, or Scissors"'); 
}

console.log(getHumanChoice());

if (getHumanChoice("rock")) {
    alert("rock");
} else if (getHumanChoice("paper")) {
    alert("paper");
} else {
    alert("scissors");
}