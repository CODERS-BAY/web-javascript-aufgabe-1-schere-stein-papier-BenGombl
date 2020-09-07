result = document.getElementById("result");
playerScore = document.getElementById("player");
computerScore = document.getElementById("computer");
round = document.getElementById("round");
gameover = document.getElementById("gameover");
newGameMenu = document.getElementById("newGame");
gameResult = document.getElementById("gameResult");
roundNum = 0;
maxWins = 0;
over = false;


var playerWins = 0;
var computerWins = 0;

function newGame(z) {
    maxWins = z;
    roundNum = 1;
    round.style.display = "block";
    document.getElementById("roundNumber").innerHTML = "Round " + roundNum;
    newGameMenu.style.display = "none";

}

function newStart() {
    playerWins = 0;
    computerWins = 0;
    newGameMenu.style.display = "block";
    round.style.display = "none";
    computerScore.innerHTML = computerWins;
    playerScore.innerHTML = playerWins;
    gameover.style.display = "none";
    over = false;
    result.innerHTML = "";

}

function play(player) {

    if(over){
        return;
    }

    roundNum++;
    var playerSym, computerSym;

   
    var computer = Math.floor(Math.random() * Math.floor(3))
    switch (player) {
        case 0:
            playerSym = "Rock";
            break;
        case 1:
            playerSym = "Paper";
            break;
        case 2:
            playerSym = "Scissors";
            break;

    }
    switch (computer) {
        case 0:
            computerSym = "Rock";
            break;
        case 1:
            computerSym = "Paper";
            break;
        case 2:
            computerSym = "Scissors";
            break;
    }

    result.innerHTML = computerSym + "(Computer) vs " + playerSym + "(you) </br>";


    if (computer == player) {
        result.innerHTML += "draw";
    } else if (player == 0 && computer == 1 || player == 1 && computer == 2 || player == 2 && computer == 0) {
        result.innerHTML += "you lost the round.";
        computerWins++;
        computerScore.innerHTML = computerWins;
    } else if (player == 0 && computer == 2 || player == 1 && computer == 0 || player == 2 && computer == 1) {
        result.innerHTML += "you won the round.";
        playerWins++;
        playerScore.innerHTML = playerWins;
    }

 

    if (playerWins == maxWins || computerWins == maxWins) {
        over = true;
        
        gameover.style.display = "block";
        if (playerWins == maxWins) {
            gameResult.innerHTML = "you Win the Game!";
        } else {
            gameResult.innerHTML = "you Lose the Game!";
        }
        return;
    }
    document.getElementById("roundNumber").innerHTML = "Round " + roundNum;
}