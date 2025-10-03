// INIT function getComputerChoice
function getComputerChoice() {
    // SET string "rock"
    let rock = "rock";
    // SET string "paper"
    let paper = "paper";
    // SET string "scissors"
    let scissors = "scissors";

    // return random value between 0 and 1
    let randomValue = Math.random(); // remember to capitalize Math
    // use conditionals to return a string depending on random value
    if (randomValue > 0.33 && randomValue < 0.66) {
        return rock;
    } else if (randomValue > 0.66) {
        return paper;
    } else {
        return scissors;
    }
}

//console.log(getComputerChoice()); // remember to add parentheses after calling a function

// INIT function getHumanChoice
function getHumanChoice() {
    // prompt the user for their choice between rock/paper/scissors
    let humanChoice = prompt("Enter a choice between rock, paper, and scissors.", "");
    // return user choice
    return humanChoice;
}

//console.log(getHumanChoice());

//INIT function playGame
//THIS FUNCTIONS DECLARES THE WINNERS AT THE END AND KEEPS TRACK OF SCORES
function playGame() {
    // Create two new variables named humanScore and computerScore in the global scope
    // Initialize those variables with the value of 0
    let computerScore = 0;
    let humanScore = 0;

    let gameCount = 0;

    // INIT function playRound with parameters humanChoice and computerChoice
    // ensure that the humanChoice parameter is case INsensitive
    
    while (gameCount < 5) { 
        function playRound(computerChoice, humanChoice) {
        // take parameters as arguments using pre-established functions
        // use conditionals to determine who wins
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
            // return winning or losing alerts based on result
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
        // add point counter to tie result if you want to count tie wins
    }

    console.log(winner(computerScore, humanScore));

    return "The game has concluded.";
}

console.log(playGame());



