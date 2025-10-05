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

function getHumanChoice() {
    let humanChoice = prompt("Enter a choice between rock, paper, and scissors.", "");
    
    return humanChoice;
}

// declare the winner and winning score once 5 rounds have concluded
function playGame() {
    let computerScore = 0;
    let humanScore = 0;
    let gameCount = 0;
    
    while (gameCount < 5) { 
        function playRound(computerChoice, humanChoice) {
            if (computerChoice.toLowerCase() === "rock" && humanChoice.toLowerCase() === "scissors" || 
            computerChoice.toLowerCase() === "paper" && humanChoice.toLowerCase() === "rock" || 
            computerChoice.toLowerCase() === "scissors" && humanChoice.toLowerCase() === "paper") {
                gameCount++;
                computerScore++;

                return "Computer wins!";
            }
            else if (humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "scissors" || 
            humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "rock" || 
            humanChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "paper") {
                gameCount++;
                humanScore++;

                return "Human wins!";
            }
            else {
                gameCount++;

                return "It's a tie!";
            }
        }

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(computerSelection, humanSelection));
    }

    function winner(computerScore, humanScore) {
        if (computerScore > humanScore) {
            return "Computer wins the game at " + computerScore + " points!";
        } else if (computerScore < humanScore) {
            return "Human wins the game at " + humanScore + " points!";
        }
        else {
            return "It's a tie at " + humanScore + " points!";
        }
    }

    console.log(winner(computerScore, humanScore));

    // return value prevents undefined from appearing at conclusion of function
    return "The game has concluded.";
}

console.log(playGame());



