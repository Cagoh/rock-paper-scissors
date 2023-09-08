function getComputerSelection() {
    // get number 0-2 that represent, 1:rock, 2:paper, 3:scissors
    return getRandomInt()
}

function getPlayerSelection() {
    let playerSelectionString = prompt(`Round ${round++}: ROCK PAPER SCISSORS?`).toUpperCase();
    if (playerSelectionString === "ROCK")
        return 0
    else if (playerSelectionString === "PAPER")
        return 1
    else if (playerSelectionString === "SCISSORS")
        return 2
}

// in javascript there is no built function to get random integer numbners
function getRandomInt() {
    // In javascript, Math.random() gives floating number from 0-1, theres is no other built in to get random integer
    return Math.floor(Math.random() * 2)
}

function game() {

    // using for loop to play 1-5 rounds
    for (let i=0; i<5; i++) {
        playRound()
    }
    if (playerScore > computerScore) {
        console.log("You Win with score of ", playerScore, ":", computerScore, "!")
    }
    else if (playerScore < computerScore) {
        console.log("You Lose with score of ", playerScore, ":", computerScore, "!")
    }
    else {
        console.log("Draw with score of ", playerScore, ":", computerScore, "!")
    }
    

}

function playRound() {
    computerSelection = getComputerSelection()
    // playerSelection = getPlayerSelection()

    if (gameOver)
        return
    if (playerSelection === computerSelection) {
        console.log("Draw! Fight again!")
    } else {
        switch (playerSelection) {
            case 0:
                if (computerSelection === 1) {
                    console.log("You Lose! Paper beats Rock")
                    computerScore++
                }
                else {
                    console.log("You Win! Rock beats Scissors")
                    playerScore++
                }
                break
            case 1:
                if (computerSelection === 0) {
                    console.log("You Win! Paper beat Rock")
                    playerScore++
                }
                else {
                    console.log("You Lose! Scissors beats paper")
                    computerScore++
                }
                break
            case 2:
                if (computerSelection === 0) {
                    console.log("You Lose! Rock beats Scissors")
                    computerScore++
                }
                else {
                    console.log("You win! Scissors beat paper")
                    playerScore++
                }
                break
            default:
                break
        }
    }
    
    // if (playerScore === 5) {

    // } else if (computerScore === 5) {

    // }
}

// Select the image by its ID
const rockImg = document.getElementById("rock-img");
const paperImg = document.getElementById("paper-img");
const scissorsImg = document.getElementById("scissors-img");

// Add a click event listener
rockImg.addEventListener("click", function() {
    // alert("Rock button clicked!");
    playerSelection = 0;
    playRound();
    round++
    if (playerScore < 5 && computerScore <  5) {
        informationRound.innerHTML = `<p>Round: ${round}</p>`;
        informationPlayed.innerHTML = `<p>Player: ${rockPaperScissorsArray[playerSelection]}, Computer: ${rockPaperScissorsArray[computerSelection]}</p>`;
        informationRound.innerHTML = `<p>Round: ${round}</p>`;
        informationScorePlayer.innerHTML = `<p>Your Score: ${playerScore}</p>`;
        informationScoreComputer.innerHTML = `<p>Computer Score: ${computerScore}</p>`;
    } else if (!gameOver) {
        gameOver = true;
        if (playerScore > computerScore) {
            informationRound.innerHTML = '<br>';
            informationScorePlayer.innerHTML = `<p>Your Score: ${playerScore}</p>`;
            informationScoreComputer.innerHTML = `<p>Computer Score: ${computerScore}</p>`;
            informationResult.innerHTML = '<p>Result: Player Wins!</p>';
        }
        else if (computerScore > playerScore) {
            informationRound.innerHTML = '<br>';
            informationScorePlayer.innerHTML = `<p>Your Score: ${playerScore}</p>`;
            informationScoreComputer.innerHTML = `<p>Computer Score: ${computerScore}</p>`;
            informationResult.innerHTML = '<p>Result: Computer Wins!</p>';
        }
        else {
            informationRound.innerHTML = '<br>';
            informationScorePlayer.innerHTML = `<p>Your Score: ${playerScore}</p>`;
            informationScoreComputer.innerHTML = `<p>Computer Score: ${computerScore}</p>`;
            informationResult.innerHTML = '<p>Result: Draw!</p>';
        }
        // Create a new button element
        const refreshButton = document.createElement('button');
        refreshButton.id = 'refresh-button'; // Set the button's ID
        refreshButton.textContent = 'Play Again!'; // Set the button's text
        refreshButton.style.fontSize = '24px';

        // Add a click event listener to the button
        refreshButton.addEventListener('click', function() {
            location.reload(); // Reload the page when the button is clicked
        });

        refreshButtonContainer.appendChild(refreshButton)
    }
    
});



paperImg.addEventListener("click", function() {

    // alert("Paper button clicked!");
    playerSelection = 1
    playRound()
    round++
    if (playerScore < 5 && computerScore <  5) {
        informationRound.innerHTML = `<p>Round: ${round}</p>`;
        informationPlayed.innerHTML = `<p>Player: ${rockPaperScissorsArray[playerSelection]}, Computer: ${rockPaperScissorsArray[computerSelection]}</p>`;
        informationRound.innerHTML = `<p>Round: ${round}</p>`;
        informationScorePlayer.innerHTML = `<p>Your Score: ${playerScore}</p>`;
        informationScoreComputer.innerHTML = `<p>Computer Score: ${computerScore}</p>`;
        
    } else if (!gameOver) {
        gameOver = true;
        if (playerScore > computerScore) {
            informationRound.innerHTML = '<br>';
            informationScorePlayer.innerHTML = `<p>Your Score: ${playerScore}</p>`;
            informationScoreComputer.innerHTML = `<p>Computer Score: ${computerScore}</p>`;
            informationResult.innerHTML = '<p>Result: Player Wins!</p>';
        }
        else if (computerScore > playerScore) {
            informationRound.innerHTML = '<br>';
            informationScorePlayer.innerHTML = `<p>Your Score: ${playerScore}</p>`;
            informationScoreComputer.innerHTML = `<p>Computer Score: ${computerScore}</p>`;
            informationResult.innerHTML = '<p>Result: Computer Wins!</p>';
        }
        else {
            informationRound.innerHTML = '<br>';
            informationScorePlayer.innerHTML = `<p>Your Score: ${playerScore}</p>`;
            informationScoreComputer.innerHTML = `<p>Computer Score: ${computerScore}</p>`;
            informationResult.innerHTML = '<p>Result: Draw!</p>';
        }
        // Create a new button element
        const refreshButton = document.createElement('button');
        refreshButton.id = 'refresh-button'; // Set the button's ID
        refreshButton.textContent = 'Play Again!'; // Set the button's text
        refreshButton.style.fontSize = '24px';

        // Add a click event listener to the button
        refreshButton.addEventListener('click', function() {
            location.reload(); // Reload the page when the button is clicked
        });

        refreshButtonContainer.appendChild(refreshButton)
    }
});



scissorsImg.addEventListener("click", function() {

    // alert("Scissors button clicked!");
    playerSelection = 2
    playRound()
    round++
    if (playerScore < 5 && computerScore <  5) {
        informationRound.innerHTML = `<p>Round: ${round}</p>`;
        informationPlayed.innerHTML = `<p>Player: ${rockPaperScissorsArray[playerSelection]}, Computer: ${rockPaperScissorsArray[computerSelection]}</p>`;
        informationRound.innerHTML = `<p>Round: ${round}</p>`;
        informationScorePlayer.innerHTML = `<p>Your Score: ${playerScore}</p>`;
        informationScoreComputer.innerHTML = `<p>Computer Score: ${computerScore}</p>`;
    } else if (!gameOver) {
        gameOver = true;
        if (playerScore > computerScore) {
            informationRound.innerHTML = '<br>';
            informationScorePlayer.innerHTML = `<p>Your Score: ${playerScore}</p>`;
            informationScoreComputer.innerHTML = `<p>Computer Score: ${computerScore}</p>`;
            informationResult.innerHTML = '<p>Result: Player Wins!</p>';
        }
        else if (computerScore > playerScore) {
            informationRound.innerHTML = '<br>';
            informationScorePlayer.innerHTML = `<p>Your Score: ${playerScore}</p>`;
            informationScoreComputer.innerHTML = `<p>Computer Score: ${computerScore}</p>`;
            informationResult.innerHTML = '<p>Result: Computer Wins!</p>';
        }
        else {
            informationRound.innerHTML = '<br>';
            informationScorePlayer.innerHTML = `<p>Your Score: ${playerScore}</p>`;
            informationScoreComputer.innerHTML = `<p>Computer Score: ${computerScore}</p>`;
            informationResult.innerHTML = '<p>Result: Draw!</p>';
        }
        // Create a new button element
        const refreshButton = document.createElement('button');
        refreshButton.id = 'refresh-button'; // Set the button's ID
        refreshButton.textContent = 'Play Again!'; // Set the button's text
        refreshButton.style.fontSize = '24px';

        // Add a click event listener to the button
        refreshButton.addEventListener('click', function() {
            location.reload(); // Reload the page when the button is clicked
        });

        refreshButtonContainer.appendChild(refreshButton)

    }

});
let gameOver = false;

let playerScore=0
let computerScore=0
let round = 1

let playerSelection
let computerSelection

let rockPaperScissorsArray = ['Rock', 'Paper', 'Scissors']

// game()

// // Select the <h1> and <h2> elements by their tag names
// const h1Element = document.querySelector('.rock-paper-scissors-container h1');
// const h2Element = document.querySelector('.rock-paper-scissors-container h2');

// // Modify the content of the <h1> and <h2> elements
// h1Element.textContent = 'New Heading';
// h2Element.textContent = 'New Subheading';

const informationPlayed = document.querySelector('#information-played');
const informationRound = document.querySelector('#information-round');
const informationScorePlayer = document.querySelector('#information-score-player');
const informationScoreComputer = document.querySelector('#information-score-computer');
const informationResult = document.querySelector('#information-result');
const refreshButtonContainer = document.querySelector('#refresh-button-container');

informationPlayed.innerHTML = `<p>Player: , Computer: </p>`;
//informationPlayed.innerHTML = `<p>Player: ${rockPaperScissorsArray[playerSelection]}, Computer: ${rockPaperScissorsArray[computerSelection]}</p>`;
//informationPlayed.innerHTML = `<p>Player: ${rockPaperScissorsArray[playerSelection]}, Computer: ${rockPaperScissorsArray[computerSelection]}</p>`;
informationRound.innerHTML = `<p>Round: ${round}</p>`;
informationScorePlayer.innerHTML = `<p>Your Score: ${playerScore}</p>`;
informationScoreComputer.innerHTML = `<p>Computer Score: ${computerScore}</p>`;
// informationResult.innerHTML = '<p>Result</p>';