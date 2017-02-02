//Rock Paper Scissors

$(document).ready(function(){

var rpsArray = ['rock', 'paper','scissors'];

$('#rock-btn').click(function(){
    // alert("You choose Rock");
    compareRPS(randomRPS(), 'rock');
    // $('#gameResults').append("<li>" + "Rock" + "</li>");
});

$('#paper-btn').click(function() {
    // alert("You choose Paper");
    compareRPS(randomRPS(), 'paper');
    // $('#gameResults').append("<li>" + "Paper" + "</li>");
});

$('#scissors-btn').click(function() {
    // alert("You choose Scisors");
    compareRPS(randomRPS(), 'scissors');
    // $('#gameResults').append("<li>" + "Scissors" + "</li>");
});


var randomRPS = function(){
    var randomIndex = Math.floor(Math.random() * 3);
    // alert("random number: " + randomIndex);
    return rpsArray[randomIndex];
}

var compareRPS = function(computerRPS, myRPS) {
    // alert("Computer choice: " + computerRPS + "\nYour choice: " + myRPS);
    $('#gameResults').append("<li>" + "Computer choice: " + computerRPS + "\nYour choice: " + myRPS + "</li>");
}

}); // end document