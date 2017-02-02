//Rock Paper Scissors

$(document).ready(function(){

var rpsArray = ['rock', 'paper','scissors'];

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
    $('#gameResults').append("<li>" + "Computer choice: " + computerRPS + "\nYour choice: " + myRPS + "</li>");
}

}); // end document