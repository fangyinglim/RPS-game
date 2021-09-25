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
    computerScore = 0;
    playerScore = 0;
    console.log(`computer: ${computerScore}`);
    console.log(`player: ${playerScore}`);
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
                resolve('parameter on resolve');
            }
        }).then((message) => {
            console.log(message)});
    }
});