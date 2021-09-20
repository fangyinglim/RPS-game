let playerChoice = '';
let computerChoice = '';

function computerPlay() {
    computerChoice = Math.floor(Math.random() * 3) //returns 0, 1 or 2//
    if (computerChoice === 0) {
        console.log('rock');
        computerChoice = 'Rock'
        return computerChoice
    } else if (computerChoice === 1) {
        console.log('paper');
        computerChoice = 'Paper'
        return computerChoice
    } else { console.log('scissors');}
             computerChoice = 'Scissors'
            return computerChoice
    }

computerPlay();

let playerClicked = document.querySelectorAll('.choice') //returns nodelist
console.log(playerClicked)
playerClicked.forEach (item => (
    item.addEventListener('click', choice)
))

function choice() {
    playerChoice = this.innerText.toLowerCase();
    console.log(this.innerText.toLowerCase());
    return playerChoice
}
