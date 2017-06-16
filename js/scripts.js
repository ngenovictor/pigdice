// Business Logic
var playerOne;
var playerTwo;
function Player(name, score){
  /*The player Object*/
  this.name = name;
  this.score = score;
};
function rollDice(){
  /*This will generate the random numbers*/


};
function initializeGame(){
  /*
  On sign Up this will start the game
  */
  if (typeof playerOne === "undefined"){
    $("section#game-section .game .game-wrapper").text("Player One to Sign Up");

  }else if(typeof playerTwo === "undefined") {
    $("section#game-section .game .game-wrapper").text("Player Two to Sign Up");
  }else{
    $("section#game-section .game .game-wrapper").text("Game will start shortly ");
    $("section#game-section .game .game-wrapper").append(playerTwo.name+' vs '+playerOne.name);

  }
};
Player.prototype.play = function (dice) {
  /*
  This will work on all the play scenarios
  */
  return this.score +=dice;
};

// User Interface Logic
$(document).ready(function(){
  // create player one and two

  $("form#player-one").submit(function(event){
    event.preventDefault();
    var nameOne = $("form#player-one input.name").val();
    playerOne = new Player(nameOne,0);
    console.log(playerOne.name)
    initializeGame();
  });

  $("form#player-two").submit(function(event){
    event.preventDefault();
    var nameTwo = $("form#player-two input.name").val();
    playerTwo = new Player(nameTwo, 0);
    console.log(playerTwo.name)
    initializeGame();
  });

});
