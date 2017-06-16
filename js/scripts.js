// Business Logic
var playerOne;
var playerTwo;
var sessionTotal = 0;
function Player(name){
  /*The player Object*/
  this.name = name;
  this.score = 0;
  this.turn = 0;
};

function assignStartTurn(){
  var pick = Math.floor(Math.random() * 2)+1;
  if (pick===2){
    playerTwo.turn =1;
    alert("Player Two Will Start");
  }else{
    playerOne.turn =1;
    alert("Player Two Will Start")
  }
};

function rollDice(){
  return Math.floor(Math.random() * 6)+1;

};
Player.prototype.play = function (diceValue) {

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
    assignStartTurn();
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
    "</div>"+
    "<div id='holdone'>"+
      "<p>Hold</p>"+
    "</div>"

  );
  $("section#game-section .two").append(
    "<div id='playtwo' class='try'>"+
      "<h2>"+playerTwo.name+"</h2>"+
      "<p>click here to roll dice</p>"+
      "<h3></h3>"+
    "</div>"+
    "<div id='holdtwo'>"+
      "<p>Hold</p>"+
    "</div>"
  );


  $("div#playone").click(function(){
    var diceRoll = rollDice();
    if(playerOne.turn===0){
      alert("No it's not your turn")
    }else{
      $(this).find("h3").text(diceRoll);
      if(diceRoll>1){
        sessionTotal+=diceRoll
        playerOne.score+=diceRoll
        $("#score-one h2").text(playerOne.score)

      }else if(playerOne.score+sessionTotal>100){
        sessionTotal+=diceRoll
        playerOne.score+=diceRoll
        $("#score-one h2").text(playerOne.score)
        alert("Player One Has Won")
      }else{
        playerOne.score-=sessionTotal;
        $("#score-one h2").text(playerOne.score);
        sessionTotal-=sessionTotal;
        playerOne.turn=0;
        playerTwo.turn=1;
      }
    }
  });



  $("div#playtwo").click(function(){
    var diceRoll = rollDice();
    if(playerTwo.turn===0){
      alert("No it's not your turn")
    }else{
      $(this).find("h3").text(diceRoll);
      if(diceRoll>1){
        sessionTotal+=diceRoll
        playerTwo.score+=diceRoll
        $("#score-two h2").text(playerTwo.score)

      }else if(playerTwo.score+sessionTotal>100){
        sessionTotal+=diceRoll
        playerTwo.score+=diceRoll
        $("#score-two h2").text(playerTwo.score)
        alert("Player Two Has Won")
      }else{
        playerTwo.score-=sessionTotal;
        $("#score-two h2").text(playerTwo.score);
        sessionTotal-=sessionTotal;
        playerTwo.turn=0;
        playerOne.turn=1;
      }
    }
  });



  $("div#holdone").click(function(){
    playerOne.turn=0;
    playerTwo.turn=1;
    sessionTotal=0
  });
  $("div#holdtwo").click(function(){
    playerTwo.turn=0;
    playerOne.turn=1;
    sessionTotal=0
  });

};



// User Interface Logic
$(document).ready(function(){
  // create player one and two

  $("form#player-one").submit(function(event){
    event.preventDefault();
    var nameOne = $("form#player-one input.name").val();
    playerOne = new Player(nameOne);
    initializeGame();
  });

  $("form#player-two").submit(function(event){
    event.preventDefault();
    var nameTwo = $("form#player-two input.name").val();
    playerTwo = new Player(nameTwo);
    console.log(playerTwo.name)
    initializeGame();
  });





});
