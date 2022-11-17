let n=parseInt(prompt("How many rounds do you want to play? No more than 7!"));
while(isNaN(n) || n>7)
{
    if(isNaN(n))
        n=parseInt(prompt("Please introduce a number, not characters"));
    else
        n=parseInt(prompt("You can't play this game all day long! Introduce a number below 7."));
}
function getComputerChoice(){
    let choice=Math.floor(Math.random()*3);
    switch(choice){
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}
function playRound(playerSelection, computerSelection,i){
    let playerChoice=playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
    console.log(`Player chose ${playerChoice} and Computer chose ${computerSelection}`);
    if(playerChoice==="Rock" && computerSelection==="Scissors" || 
        playerChoice==="Paper" && computerSelection==="Rock" || 
        playerChoice==="Scissors" && computerSelection==="Paper"){
            console.log(`Round: ${i}: You win! ${playerChoice} beats ${computerSelection}`);
            return 1;}
    else if(playerChoice===computerSelection){
        console.log(`Round: ${i}: It's a draw! You both chose ${playerChoice}`);
        return 0;}
    else{
        console.log(`Round: ${i}: You lose! ${computerSelection} beats ${playerChoice}`);
        return -1;}
}
let roundsWon=0;
let roundsLost=0;
let roundsDraw=0;
let roundResult=0;
function game(n){
    for(i=1;i<=n;i++)
    {
        let playerSelection=prompt("Rock, Paper or Scissors?");
        playerSelection=playerSelection.toLowerCase();
        while(playerSelection!=="rock" && playerSelection!=="paper" && playerSelection!=="scissors")
            playerSelection=prompt("You mispelled something, please introduce it again.").toLowerCase();
        let computerSelection=getComputerChoice();
        roundResult=playRound(playerSelection,computerSelection,i);
        switch(roundResult){
            case 1:
                roundsWon++;
                break;
            case 0:
                roundsDraw++;
                break;
            case -1:
                roundsLost++;
                break;
        }
        console.log(`The score is ${roundsWon} to ${roundsLost}`);
    }
    if(roundsWon>roundsLost)
        console.log(`You won! ${roundsWon} rounds won, ${roundsDraw} draw rounds and ${roundsLost} lost rounds`);
    else if(roundsWon===roundsLost)
        console.log(`It's a draw! ${roundsWon} rounds won, ${roundsDraw} draw rounds and ${roundsLost} lost rounds`);
    else
        console.log(`You lost! ${roundsWon} rounds won, ${roundsDraw} draw rounds and ${roundsLost} lost rounds`);
}
game(n);
