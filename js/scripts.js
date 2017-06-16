// Business Logic
var playerOne;
var playerTwo;
function Player(name, score){
  /*The player Object*/
  this.name = name;
  this.score = score;
};
function rollDice(){
  


};
Player.prototype.play = function (dice) {
  return this.score +=dice;
};

// This will initialize the game
function initializeGame(){
  if (typeof playerOne === "undefined"){
    $("section#game-section .game .game-wrapper").text("Player One to Sign Up");

  }else if(typeof playerTwo === "undefined") {
    $("section#game-section .game .game-wrapper").text("Player Two to Sign Up");
  }else{
    $("section#game-section .game .game-wrapper").text("Game will start shortly ");
    $("section#game-section .game .game-wrapper").append(playerTwo.name+' vs '+playerOne.name);
    startGame();
  }
};
// This will start the game. Show zero scores
function startGame(){
  $("section#game-section .game .game-wrapper").remove().fadeIn(4000, function(){
    $("section#game-section .game .game-board").show("");
    $("section#game-section .game .game-board").css({"display":"table-cell"});
  });
  $("div#score-one h2").text(playerOne.score);
  $("div#score-two h2").text(playerTwo.score);
  $("section#game-section .one").text("");
  $("section#game-section .two").text("");


  $("section#game-section .one").append(
    "<div id='playone' class='try' >"+
      "<h2>"+playerOne.name+"</h2>"+
      "<p>click here to roll dice</p>"+
      "<h3></h3>"+
    "</div>"
  );

  $("div#playone").click(function(){
    alert("One");
  });

  $("section#game-section .two").append(
    "<div id='playtwo' class='try'>"+
      "<h2>"+playerTwo.name+"</h2>"+
      "<p>click here to roll dice</p>"+
      "<h3></h3>"+
    "</div>"
  );

  $("div#playtwo").click(function(){

  });

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
