var userChoice = "";
var compChoice = "";
var compChoiceGen = Math.random();
var rockButt = document.body.querySelector('.rock');
var paperButt = document.body.querySelector('.paper');
var scissorButt = document.body.querySelector('.scissors');
var resetButt = document.body.querySelector('.resetScore');
const tally = {
    wins: 0,
    ties: 0,
    losses: 0
}

function checker(usersPick){
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
        console.log(`Your choice: ${userChoice} Computer Choice: ${compChoice} Result: You win`);
    } else if(result == 'lose'){
        tally.losses += 1;
        console.log(`Your choice: ${userChoice} Computer Choice: ${compChoice} Result: You lose`);
    } else if(result == 'tie'){
        tally.ties += 1;
        console.log(`Your choice: ${userChoice} Computer Choice: ${compChoice} Result: You lose`);
    }

    console.log(`Wins: ${tally.wins} Ties: ${tally.ties} Losses: ${tally.losses}`);
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
    userChoice = rockButt.innerHTML;
    checker(rockButt);
});

paperButt.addEventListener('click', () => {
    userChoice = paperButt.innerHTML;
    checker(paperButt);
});

scissorButt.addEventListener('click', () => {
    userChoice = scissorButt.innerHTML;
    checker(scissorButt);
});

resetButt.addEventListener('click', () => {
    tally.wins = 0;
    tally.ties = 0;
    tally.losses = 0;
});



