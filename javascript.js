const menu = document.createElement("div");
const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");

const results = document.createElement("div");
const announcement = document.createElement("p");

rockButton.textContent = "rock";
paperButton.textContent = "paper";
scissorsButton.textContent = "scissors";

document.body.appendChild(results);
results.appendChild(announcement);

document.body.appendChild(menu);
menu.appendChild(rockButton);
menu.appendChild(paperButton);
menu.appendChild(scissorsButton);

function getComputerChoice() {
    let rock = "rock";
    let paper = "paper";
    let scissors = "scissors";
    let randomValue = Math.random();
    
    // return a different string depending on values equally divided into three from 0-1
    if (randomValue > 0.33 && randomValue < 0.66) {
        return rock;
    } else if (randomValue > 0.66) {
        return paper;
    } else {
        return scissors;
    }
}

// function getHumanChoice() {
//     rockButton.addEventListener('click', (event) => {
//         let humanChoice = "rock";
//         return humanChoice;             
// })
//     paperButton.addEventListener('click', (event) => {
//         let humanChoice = "paper";
//         return humanChoice;             
// })
//     scissorsButton.addEventListener('click', (event) => {
//         let humanChoice = "scissors";
//         return humanChoice;             
// })
// }

//function playGame() {
    let computerScore = 0;
    let humanScore = 0;

    //while (humanScore < 5 || computerScore < 5) {
        function playRound(computerChoice, humanChoice) {
                    if (computerChoice == "rock" && humanChoice == "scissors" || 
                    computerChoice == "paper" && humanChoice == "rock" || 
                    computerChoice == "scissors" && humanChoice == "paper") {
                        if (humanScore < 5 && computerScore < 5) {
                            computerScore++;
                        }

                        if (humanScore == 5 || computerScore == 5) {
                            if (humanScore > computerScore) {
                                return "Player won the game! Computer score: " + computerScore + "; Player score: " + humanScore;
                            } else if (humanScore < computerScore) {
                                return "Computer won the game! Computer score: " + computerScore + "; Player score: " + humanScore;
                            }
                        } else {
                            return "Computer wins! Computer score: " + computerScore + "; Player score: " + humanScore;
                        }
                    }
                    else if (humanChoice == "rock" && computerChoice == "scissors" || 
                    humanChoice == "paper" && computerChoice == "rock" || 
                    humanChoice == "scissors" && computerChoice == "paper") {
                        if (humanScore < 5 && computerScore < 5) {
                            humanScore++;
                        }

                        if (humanScore == 5 || computerScore == 5) {
                            if (humanScore > computerScore) {
                                return "Player won the game! Computer score: " + computerScore + "; Player score: " + humanScore;
                            } else if (humanScore < computerScore) {
                                return "Computer won the game! Computer score: " + computerScore + "; Player score: " + humanScore;
                            }
                        } else {
                            return "Player wins! Computer score: " + computerScore + "; Player score: " + humanScore;
                        }
                    }
                    else {
                        if (humanScore == 5 || computerScore == 5) {
                            if (humanScore > computerScore) {
                                return "Player won the game! Computer score: " + computerScore + "; Player score: " + humanScore;
                            } else if (humanScore < computerScore) {
                                return "Computer won the game! Computer score: " + computerScore + "; Player score: " + humanScore;
                            }
                        } else {
                            return "It's a tie! Computer score: " + computerScore + "; Player score: " + humanScore;
                        }
                    }
                }


    rockButton.addEventListener("click", (event) => {
        let humanSelection = "rock";
        const computerSelection = getComputerChoice();
        announcement.textContent = (playRound(computerSelection, humanSelection));
        }
    )

    paperButton.addEventListener("click", (event) => {
        let humanSelection = "paper";
        const computerSelection = getComputerChoice();
        announcement.textContent = (playRound(computerSelection, humanSelection));
        }
    )

    scissorsButton.addEventListener("click", (event) => {
        let humanSelection = "scissors";
        const computerSelection = getComputerChoice();
        announcement.textContent = (playRound(computerSelection, humanSelection));
        }
    )


// menu.addEventListener("click", (event) => {
//     let target = event.target;

//     switch(target.id) {
//         case "rock":
//             console.log('Rock was clicked');
//             break;
//         case "paper":
//             console.log('Dashboard menu item was clicked');
//             break;
//         case "scissors":
//             console.log('Report menu item was clicked');
//             break;
//     }
// });


