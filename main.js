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

//registers users choice when clicked on any of the selection//
playerClicked.forEach (item => {
    item.addEventListener('click', choice);
})
//whenever user clicks, random selection by system generated//
playerClicked.forEach (item => {
    item.addEventListener('click', computerPlay)
})

function choice() { 
    choiceSelected = this.classList[1];
    playRound(choiceSelected, computerChoice, trackScore);
}

let computerScore = 0;
let playerScore = 0;
//STEP 3//
//playRound function is executed and scores are compared, first to 3 wins//
function playRound(choiceSelected, computerChoice, callback) {
    console.log(choiceSelected); 
    console.log(computerChoice);
    let message;
        if (choiceSelected === computerChoice) {
            console.log('tie')
            message = 'It\'s a tie.' 
        }
        else if (choiceSelected === "rock" && computerChoice === "scissors") {
            console.log('win');
            playerScore++;
            message = 'Player Wins!'
        }
        else if (choiceSelected === "paper" && computerChoice === "rock") {
            console.log('win');
            playerScore++;
            message = 'Player Wins!'

        }
        else if (choiceSelected === "scissors" && computerChoice === "paper") {
            console.log('win');
            playerScore++;
            message = 'Player Wins!'

        }
        else {
            console.log('lose');
            computerScore++;
            message = 'Player Loses...'

        }

    callback(message); //callback function invoked after 1 game is played
}
function trackScore(message) {
    console.log(message); //console log param1
    document.querySelector('.playerScore').innerText = playerScore;
    document.querySelector('.computerScore').innerText = computerScore;
    document.querySelector('.popUpMessage').innerText = message;

    console.log(`player: ${playerScore}`);
    console.log(`computer: ${computerScore}`); // console log scores, will update and return scores since they are global scoped?
    let resetMessage;
    if (playerScore === 3) {
        console.log('player wins')
        resetMessage = 'Player wins the game! Scores are resetted'
        setTimeout(() => {
            endGame(resetMessage);  
        }, 1500);
    }
    else if (computerScore === 3) {
        console.log('player loses')
        resetMessage = 'Player loses the game. Scores are resetted'
        setTimeout(() => {
            endGame(resetMessage);  
        }, 1500);
    }
    else if (playerScore === 3 && computerScore === 3) {
        console.log('tie')
        resetMessage = 'It\'s a tie, try again! Scores are resetted'
        setTimeout(() => {
            endGame(resetMessage);  
        }, 1500);
    }

}
//reset score after 3 wins//
function endGame(resetMessage) {
    computerScore = 0;
    playerScore = 0;
    document.querySelector('.popUpMessage').innerText = resetMessage
    document.querySelector('.playerScore').innerText = playerScore;
    document.querySelector('.computerScore').innerText = computerScore;
    // console.log(`computer: ${computerScore}`);
    // console.log(`player: ${playerScore}`);

}


//when user hovers over pokemon, picture changes//
let squirtleHover = document.querySelector('img[alt="squirtle"]');
let squirtleSrc = 'images/rock-squirtle.png';
let squirtleAngrySrc = 'images/squirtle-angry.jpeg';
let newDiv = document.createElement('div');
newDiv.classList.add('blink');

squirtleHover.addEventListener('mouseover', () => {
    squirtleHover.src = squirtleAngrySrc; 
    let parentDiv = squirtleHover.parentNode; //parent div of img//
    parentDiv.insertBefore(newDiv, squirtleHover); 
    return })

squirtleHover.addEventListener('mouseout', () => {
    squirtleHover.src = squirtleSrc;
    document.querySelector('.blink').remove();
    return })

let charmanderHover = document.querySelector('img[alt="charmander"]');
let charmanderSrc = 'images/scissors-charmander.png';
let charmanderAngrySrc = 'images/charmander-angry.png';

charmanderHover.addEventListener('mouseover', () => {
    charmanderHover.src = charmanderAngrySrc 
    let parentDiv = charmanderHover.parentNode; //parent div of img//
    parentDiv.insertBefore(newDiv, charmanderHover); 
    return });

charmanderHover.addEventListener('mouseout', () => {
    charmanderHover.src = charmanderSrc 
    document.querySelector('.blink').remove();
    return });

let bulbasaurHover = document.querySelector('img[alt="bulbasaur"]');
let bulbasaurSrc = 'images/paper-bulbasaur.png';
let bulbasaurAngrySrc = 'images/bulbasaur-angry.png';

bulbasaurHover.addEventListener('mouseover', () => {
    bulbasaurHover.src = bulbasaurAngrySrc 
    let parentDiv = bulbasaurHover.parentNode; //parent div of img//
    parentDiv.insertBefore(newDiv, bulbasaurHover); 
    return });

bulbasaurHover.addEventListener('mouseout', () => {
    bulbasaurHover.src = bulbasaurSrc;
    document.querySelector('.blink').remove();
    return });


playerClicked.forEach (item => {
    item.onclick = function animationAppear() {
        return new Promise ((resolve, reject) => {
            if (item.classList[1] === "rock") {
                document.querySelector('.choice-animation').style.background = 'url(images/squirtle-attack.png)';
                document.querySelector('.choice-animation').style.backgroundSize = 'cover';
                document.querySelector('.attackName').innerText = 'Squirtle used Rapid Spin! '
                resolve('remove animation after 2s');
            } 
            else if (item.classList[1] === "paper") {
                document.querySelector('.choice-animation').style.background = 'url(images/bulbasaur-attack.png)'
                document.querySelector('.choice-animation').style.backgroundSize = 'cover';
                document.querySelector('.attackName').innerText = 'Bulbasaur used Razor Leaf! '
                resolve('remove animation after 2s');
            }
            else if (item.classList[1] === "scissors") {
                document.querySelector('.choice-animation').style.background = 'url(images/charmander-attack.png)'
                document.querySelector('.choice-animation').style.backgroundSize = 'cover';
                document.querySelector('.attackName').innerText = 'Charmander used Flamethrower! '
                resolve('remove animation after 2s'); 
            }
        }).then((message) => {
            setTimeout(() => {
                document.querySelector('.choice-animation').style.background = '';
                document.querySelector('.attackName').innerText = '';
            }, 1500);
            console.log(message)});
    }
});



