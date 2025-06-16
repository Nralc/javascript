var userChoice = "";
var compChoice = "";
var compChoiceGen = Math.random();
var rockButt = document.body.querySelector('.rock');
var paperButt = document.body.querySelector('.paper');
var scissorButt = document.body.querySelector('.scissors');
var resetButt = document.body.querySelector('.resetScore');
var winner = document.body.querySelector('.winner');
var record = document.body.querySelector('h2');

const tally = {
    wins: 0,
    ties: 0,
    losses: 0
}

//load
const scoreTally = JSON.parse(localStorage.getItem("tally"));
if(scoreTally){
    tally.wins = scoreTally.wins;
    tally.ties = scoreTally.ties;
    tally.losses = scoreTally.losses;
}

record.innerHTML = `Wins: ${tally.wins}&nbsp&nbsp&nbsp&nbsp  Ties: ${tally.ties}&nbsp&nbsp&nbsp&nbsp  Losses: ${tally.losses}`;


function checker(){
    if(compChoiceGen > 0 && compChoiceGen < (1/3)){
        compChoice = "Rock";
    } else if(compChoiceGen > (1/3) && compChoiceGen < (2/3)){
        compChoice ="Paper";
    } else if(compChoiceGen > (2/3) && compChoiceGen < 1){
        compChoice ="Scissors";
    }

    winnerPicker();
}

function details(result){
    if(result == 'win'){
        tally.wins += 1;
        winner.innerHTML = "You win!";
        
    } else if(result == 'lose'){
        tally.losses += 1;
        winner.innerHTML = "You lose!";
    } else if(result == 'tie'){
        tally.ties += 1;
        winner.innerHTML = "It's a tie!";
    }

    localStorage.setItem("tally", JSON.stringify(tally));
    record.innerHTML = `Wins: ${tally.wins}&nbsp&nbsp&nbsp&nbsp  Ties: ${tally.ties}&nbsp&nbsp&nbsp&nbsp  Losses: ${tally.losses}`;

}

function winnerPicker(){
    if(userChoice == "Rock" && compChoice == "Scissors"){
        details('win');

    } else if(userChoice == "Rock" && compChoice == "Paper"){
        details('lose');

    } else if(userChoice == "Paper" && compChoice == "Rock"){
        details('win');

    } else if(userChoice == "Paper" && compChoice == "Scissors"){
        details('lose');

    } else if(userChoice == "Scissors" && compChoice == "Paper"){
        details('win');

    } else if(userChoice == "Scissors" && compChoice == "Rock"){
        details('lose');

    } else if(userChoice == compChoice){
        details('tie');

    }
}

rockButt.addEventListener('click', () => {
    userChoice = "Rock";
    checker();
});

paperButt.addEventListener('click', () => {
    userChoice = "Paper";
    checker();
});

scissorButt.addEventListener('click', () => {
    userChoice = "Scissors";
    checker();
});

resetButt.addEventListener('click', () => {
    tally.wins = 0;
    tally.ties = 0;
    tally.losses = 0;
    localStorage.removeItem("tally");
    winner.innerHTML = "";
    record.innerHTML = `Wins: ${tally.wins}&nbsp&nbsp&nbsp&nbsp  Ties: ${tally.ties}&nbsp&nbsp&nbsp&nbsp  Losses: ${tally.losses}`;
});




