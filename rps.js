var userChoice = "";
var compChoice = "";
var compChoiceGen = Math.random();
var rockButt = document.body.querySelector('.rock');
var paperButt = document.body.querySelector('.paper');
var scissorButt = document.body.querySelector('.scissors');

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

function winnerPicker(){
    if(userChoice == "Rock" && compChoice == "Scissors"){
        console.log(`Your choice: ${userChoice} Computer Choice: ${compChoice} Result: You win`);
    } else if(userChoice == "Rock" && compChoice == "Paper"){
        console.log(`Your choice: ${userChoice} Computer Choice: ${compChoice} Result: You lose`);
    } else if(userChoice == "Paper" && compChoice == "Rock"){
        console.log(`Your choice: ${userChoice} Computer Choice: ${compChoice} Result: You win`);
    } else if(userChoice == "Paper" && compChoice == "Scissors"){
        console.log(`Your choice: ${userChoice} Computer Choice: ${compChoice} Result: You lose`);
    } else if(userChoice == "Scissors" && compChoice == "Paper"){
        console.log(`Your choice: ${userChoice} Computer Choice: ${compChoice} Result: You win`);
    } else if(userChoice == "Scissors" && compChoice == "Rock"){
        console.log(`Your choice: ${userChoice} Computer Choice: ${compChoice} Result: You lose`);
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



