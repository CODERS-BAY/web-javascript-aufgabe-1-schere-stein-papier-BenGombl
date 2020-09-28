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
    round.className = "visible";
    document.getElementById("roundNumber").innerHTML = "Round " + roundNum;
    newGameMenu.className = "invisible"

}

function newStart() {
    playerWins = 0;
    computerWins = 0;
    newGameMenu.className = "visible"
    round.className = "invisible";
    computerScore.innerHTML = computerWins;
    playerScore.innerHTML = playerWins;
    gameover.className = "invisible"
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
        
        gameover.className = "visible"
        if (playerWins == maxWins) {
            gameResult.innerHTML = "you Win the Game!";
        } else {
            gameResult.innerHTML = "you Lose the Game!";
        }
        return;
    }
    document.getElementById("roundNumber").innerHTML = "Round " + roundNum;
}