function getComputerSelection() {
    // get number 1-3 that represent, 1:rock, 2:paper, 3:scissors
    return getRandomInt()
}

function getPlayerSelection() {
    let playerSelectionString = prompt(`Round ${round++}: ROCK PAPER SCISSORS?`).toUpperCase();
    if (playerSelectionString === "ROCK")
        return 1
    else if (playerSelectionString === "PAPER")
        return 2
    else if (playerSelectionString === "SCISSORS")
        return 3
}

// in javascript there is no built function to get random integer numbners
function getRandomInt() {
    // In javascript, Math.random() gives floating number from 0-1, theres is no other built in to get random integer
    return Math.floor(Math.random() * 3) + 1
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
    let computerSelection = getComputerSelection()
    let playerSelection = getPlayerSelection()

    if (playerSelection === computerSelection) {
        console.log("Draw! Fight again!")
    } else {
        switch (playerSelection) {
            case 1:
                if (computerSelection === 2) {
                    console.log("You Lose! Paper beats Rock")
                    computerScore++
                }
                else {
                    console.log("You Win! Rock beats Scissors")
                    playerScore++
                }
                break
            case 2:
                if (computerSelection === 1) {
                    console.log("You Win! Paper beat Rock")
                    playerScore++
                }
                else {
                    console.log("You Lose! Scissors beats paper")
                    computerScore++
                }
                break
            case 3:
                if (computerSelection === 1) {
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
}

let playerScore=0
let computerScore=0
let round = 1

game()