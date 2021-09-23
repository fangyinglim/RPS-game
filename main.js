let computerChoice = '';
let choiceSelected = '';
let count = 0;
//STEP 1//
//computer generates a random value from 0 to 2, which will return rock, paper or scissors//
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
    
};
computerPlay();
//STEP 2//
//user picks their choice, after choice is selected, playRound function will be invoked//
//callback function 'trackScore' included to track the score after playRound is executed//


let playerClicked = document.querySelectorAll('.choice') //returns nodelist//
// console.log(playerClicked)

//registers users choice when clicked on any of the selection//
playerClicked.forEach (item => {
    item.addEventListener('click', choice);
})
//whenever user clicks, random selection by system generated//
playerClicked.forEach (item => {
    item.addEventListener('click', computerPlay)
})

function choice() { 
    choiceSelected = this.innerText.toLowerCase();
    playRound(choiceSelected, computerChoice, trackScore);
}


let computerScore = 0;
let playerScore = 0;
//STEP 3//
//playRound function is executed and scores are compared, first to 3 wins//
function playRound(choiceSelected, computerChoice, callback) {
    console.log(choiceSelected); 
    console.log(computerChoice);
        if (choiceSelected === computerChoice) {
            console.log('tie')
        }
        else if (choiceSelected === "rock" && computerChoice === "scissors") {
            console.log('win');
            playerScore++;
        }
        else if (choiceSelected === "paper" && computerChoice === "rock") {
            console.log('win');
            playerScore++;

        }
        else if (choiceSelected === "scissors" && computerChoice === "paper") {
            console.log('win');
            playerScore++;

        }
        else {
            console.log('lose');
            computerScore++;

        }

    callback('parameter that will pass through callback'); //callback function invoked after 1 game is played
}
function trackScore(param1) {
    console.log(param1); //console log param1
    console.log(`computer: ${computerScore}`); // console log scores, will update and return scores since they are global scoped?
    console.log(`player: ${playerScore}`);
    if (playerScore === 3) {
        console.log('player wins')
        endGame();
    }
    else if (computerScore === 3) {
        console.log('player loses')
        endGame();
    }
    else if (playerScore === 3 && computerScore === 3) {
        console.log('tie')
        endGame();
    }

}
//reset score after 3 wins//
function endGame() {
    console.log('game ends, code to reset scores')
    computerScore = 0;
    playerScore = 0;
    console.log(`computer: ${computerScore}`);
    console.log(`player: ${playerScore}`);
}