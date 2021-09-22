let computerChoice = '';
let choiceSelected = '';
let count = 0

function computerPlay() {
    computerChoice = Math.floor(Math.random() * 3) //returns 0, 1 or 2//
    if (computerChoice === 0) {
        computerChoice = 'rock'
        return computerChoice
    } else if (computerChoice === 1) {
        computerChoice = 'paper'
        return computerChoice
    } else { 
        computerChoice = 'scissors'
        return computerChoice
    }
}
//callback function 'trackScore' included to track the score after playRound is executed
function choice() { 
    choiceSelected = this.innerText.toLowerCase();
    playRound(choiceSelected, computerChoice, trackScore);
}

let playerClicked = document.querySelectorAll('.choice') //returns nodelist//
// console.log(playerClicked)

//whenever user clicks, random selection by system generated//
playerClicked.forEach (item => {
    item.addEventListener('click', computerPlay)
})
//registers users choice when clicked on any of the selection//
playerClicked.forEach (item => {
    item.addEventListener('click', choice);
})

let computerScore = 0;
let playerScore = 0;

function playRound(choiceSelected, computerChoice, callback) {
    console.log(choiceSelected); 
    console.log(computerChoice);
        if (choiceSelected === computerChoice) {
            console.log('tie')
        }
        else if (choiceSelected == "rock" && computerChoice == "scissors") {
            console.log('win');
            playerScore++;
        }
        else if (choiceSelected == "paper" && computerChoice == "rock") {
            console.log('win');
            playerScore++;

        }
        else if (choiceSelected == "scissors" && computerChoice == "paper") {
            console.log('win');
            playerScore++;

        }
        else {
            console.log('lose');
            computerScore++;

        }
    callback(); //callback function invoked after 1 game is played

}
function trackScore() {
    if (playerScore == 3) {
        console.log('player wins')
        endGame();
    }
    else if (computerScore == 3) {
        console.log('player loses')
        endGame();
    }
    else if (playerScore == 3 && computerScore == 3) {
        console.log('tie')
        endGame();
    }

}

function endGame() {
    console.log('game ends, code to reset scores')
}