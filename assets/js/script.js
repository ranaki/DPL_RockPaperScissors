//Rock Paper Scissors

$(document).ready(function(){

    var rpsArray = ['rock', 'paper','scissors'];
    var numMyWins = 0;
    var numComputerWins = 0;

    $('#reset').click( function() {
        alert("This will reset the game");
        $('#gameResults').empty();
        numMyWins = 0;
        numComputerWins = 0;
        updateWinCount();
    })

    $('#rock-btn').click(function(){
        compareRPS(randomRPS(), 'rock');
    });

    $('#paper-btn').click(function() {
        compareRPS(randomRPS(), 'paper');
    });

    $('#scissors-btn').click(function() {
        compareRPS(randomRPS(), 'scissors');
    });


    var randomRPS = function(){
        var randomIndex = Math.floor(Math.random() * 3);
        return rpsArray[randomIndex];
    }

    var compareRPS = function(computerRPS, myRPS) {
        // alert("Computer choice: " + computerRPS + "\nYour choice: " + myRPS);
        $('#gameResults').append("<li>Winner is: " + whoWins(computerRPS, myRPS) + " --- Computer choice: " + computerRPS + ", Your choice: " + myRPS + "</li>");
        updateWinCount();
    }

    var whoWins = function(computerRPS, myRPS) {
        //rock wins scissors
        //paper wins rock
        //scissors win paper
        var winner = 'tie';

        switch (computerRPS) {
            case 'rock':
                if (myRPS === 'scissors') {
                    winner = "computer";
                    numComputerWins ++;
                } else if (myRPS === 'paper') {
                    winner = "you"
                    numMyWins ++;
                }
                break;
            case 'paper':
                if (myRPS === 'rock') {
                    winner = "computer";
                    numComputerWins ++;
                } else if (myRPS === 'scissors') {
                    winner = "you"
                    numMyWins ++;
                }
                break;
            case 'scissors':
                if (myRPS === 'paper') {
                    winner = "computer";
                    numComputerWins ++;
                } else if (myRPS === 'rock') {
                    winner = "you"
                    numMyWins ++;
                }
                break;
        
            default:
                break;
        }
        return winner;
    }

    var updateWinCount = function() {
        $('#myNumWins').text(numMyWins);
        $('#compNumWins').text(numComputerWins);
    }

}); // end document