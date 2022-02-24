
var userChoiceButton = document.querySelector('.choice');
userChoiceButton.addEventListener('click', function(){
    var userInput = userChoiceButton.getAttribute('id');
    alert(userInput);
});

//userChoiceButton.addEventListener('click', getUserChoice );

//document.querySelector('.choice').addEventListener('click',getUserChoice)
function getUserChoice(){

   var userInput = userChoiceButton.getAttribute('id');
    alert(userInput) ;
   }


function getComputerChoice(){
    var randomNumber = Math.floor(Math.random() * 3);
    
    if (randomNumber === 0) {
        return 'bear';
    }
    else if (randomNumber === 1) {
        return 'human';
    }
    else {
        return 'gun';
    }
}

function determinWinner (UserChoice, ComputerChoice) {
if(UserChoice === ComputerChoice){
    return 'It is a tie';
}
// if user selects human
if(UserChoice === 'human') {
    //if computer selects bear
    if(ComputerChoice === 'bear'){
        return 'You have been mauled by a bear';
    }
    else {
        return 'You have disarmed a gun';
    }
}
// if user selects bear
if(UserChoice === 'bear'){
    //if computer selects human 
    if(ComputerChoice === 'human'){
        return 'You have mauled a human';
    }
    else{
        return 'You have been shot by a gun';
    }
}
//if user selects gun
if(UserChoice === 'gun'){
    //if computer selects human
    if(ComputerChoice === 'human'){
        return 'You have been disarmed by a human';
    } 
    else{
        return 'You have shot a bear';
    }
}
}

function playGame(){
    //var promptUserChoice = prompt('Please choose human, bear or gun');
    var UserChoice = getUserChoice();
    var ComputerChoice = getComputerChoice();
    //console.log(UserChoice);
    //console.log(ComputerChoice);
   // console.log(determinWinner(UserChoice, ComputerChoice));
   var winner =  determinWinner(UserChoice, ComputerChoice);
   alert(winner);
}

