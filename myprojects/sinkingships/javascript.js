//Initializing variables
var guessButton = document.getElementById("guessButton");
var ship0 = Math.floor(Math.random() * (18 - 1) + 1);
var guessesRemaining = 7;
var locations = new Array();
var gameboard = new Array();
var usedGuesses = [-1,-1,-1,-1,-1,-1,-1,-1];
var kaboom;
var sploosh;
//Setting up the gameboard with empty spaces
for(var i=0;i<20;i++){
	gameboard[i] = "<span class=\"tile\">&nbsp</span>";
}
//Sets guessesRight (used to determine if a player wins or not) to 0 and sets the location of the ship
var guessesRight = 0;
locations[0] = ship0;
locations[1] = ship0 + 1;
locations[2] = ship0 + 2;

guessButton.onclick = playGame;
/*THIS IS USED IF YOU WANT TO "CHEAT". IT SHOWS THE LOCATION OF THE SHIP ON THE FIRST RUN, REMOVE THE COMMENT*/
//alert("Correct: " + locations[0] + " " + locations[1] + " " + locations[2]);

function playGame() {
	
	//Initializing sound files
	kaboom = new Audio("sounds/kaboom.mp3");
	sploosh = new Audio("sounds/sploosh.mp3");
	var guess = document.getElementById("inputNum").value;
	guessesRemaining--;
	document.getElementById("counter").textContent=(guessesRemaining);
	//tests to see if a player has used a number already.
	var isUsed = false;
	for(var i=0;i<usedGuesses.length;i++) {
		if(guess == usedGuesses[i]) {
			isUsed = true;
			
		}
	}
	
	//Lots of if statements. Tests for what the player guesses and if it is one of the ship's locations, gives
	//them a guess right and plays a sound. If not, gives the player a wrong guess and plays a different sound.
	//Also updates text on the webpage.
	if((guess == locations[0] || guess == locations[1] || guess == locations[2]) && isUsed == false) {
		guessesRight++;
		document.getElementById("guess").innerHTML=("Ka-BEWMM! Direct hit cap'n!! &nbsp <input id=\"inputNum\" type=\"number\">&nbsp <input id=\"guessButton\" value=\"Guess\" type=\"button\">");
		kaboom.play();
		guessButton = document.getElementById("guessButton");
		guessButton.onclick = playGame;
		gameboard[guess-1]="<span id=\"hitmarker\" class=\"tile\">✹</span>";
		document.getElementById("table").innerHTML=("<div id=\"table\" class=\"unselectable\">" + gameboard.join("") + "</div>");
		if(guessesRight==3) {
			winnerWinnerChickenDinner();
		} else if(guessesRemaining==0) {
			loser();
		}
		usedGuesses[guessesRemaining] = guess;
	} else if(guess > 20) {
		document.getElementById("guess").innerHTML=("That's way too high cap'n! You hit off the grid! &nbsp <input id=\"inputNum\" type=\"number\">&nbsp <input id=\"guessButton\" value=\"Guess\" type=\"button\">");
		sploosh.play();
		guessButton = document.getElementById("guessButton");
		guessButton.onclick = playGame;
		document.getElementById("table").innerHTML=("<div id=\"table\" class=\"unselectable\">" + gameboard.join("") + "</div>");
		if(guessesRight==3) {
			winnerWinnerChickenDinner();
		} else if(guessesRemaining==0) {
			loser();
		}
	} else if(guess < 1) {
		document.getElementById("guess").innerHTML=("That's way too low cap'n! You hit off the grid! &nbsp <input id=\"inputNum\" type=\"number\">&nbsp <input id=\"guessButton\" value=\"Guess\" type=\"button\">");
		sploosh.play();
		guessButton = document.getElementById("guessButton");
		guessButton.onclick = playGame;
		document.getElementById("table").innerHTML=("<div id=\"table\" class=\"unselectable\">" + gameboard.join("") + "</div>");
		if(guessesRight==3) {
			winnerWinnerChickenDinner();
		} else if(guessesRemaining==0) {
			loser();
		}
	} else if(isUsed == true) {
		isUsed = false;
		document.getElementById("guess").innerHTML=("You already hit there cap'n! &nbsp <input id=\"inputNum\" type=\"number\">&nbsp <input id=\"guessButton\" value=\"Guess\" type=\"button\">");
		sploosh.play();
		guessButton = document.getElementById("guessButton");
		guessButton.onclick = playGame;
		document.getElementById("table").innerHTML=("<div id=\"table\" class=\"unselectable\">" + gameboard.join("") + "</div>");
		if(guessesRemaining==0) {
			loser();
		}
		
	} else {
		document.getElementById("guess").innerHTML=("SPLOOOSH!! That's a miss! &nbsp <input id=\"inputNum\" type=\"number\">&nbsp <input id=\"guessButton\" value=\"Guess\" type=\"button\">");
		sploosh.play();
		guessButton = document.getElementById("guessButton");
		guessButton.onclick = playGame;
		gameboard[guess-1]="<span id=\"missmarker\" class=\"tile\">X</span>";
		document.getElementById("table").innerHTML=("<div id=\"table\" class=\"unselectable\">" + gameboard.join("") + "</div>");
		if(guessesRight==3) {
			winnerWinnerChickenDinner();
		} else if(guessesRemaining==0) {
			loser();
		}
	}	
}
//gives the player a winner update.
function winnerWinnerChickenDinner() {
	document.getElementById("guess").innerHTML=("Congrats cap'n! You sunk ze vicious squid monster! &nbsp <input id=\"replayButton\" value=\"Play Again!\" type=\"button\">");
	var replayButton = document.getElementById("replayButton");
	replayButton.onclick = reset;
}
//gives the player a loser update.
function loser() {
	document.getElementById("guess").innerHTML=("Ze enemy has escaped. We have failed... &nbsp <input id=\"replayButton\" value=\"Play Again!\" type=\"button\">");
	var replayButton = document.getElementById("replayButton");
	replayButton.onclick = reset;
	gameboard[ship0] = "<span id=\"squid1\" class=\"tile\">&nbsp</span>";
	gameboard[ship0 + 1] = "<span id=\"squid2\" class=\"tile\">&nbsp</span>";
	gameboard[ship0 + 2] = "<span id=\"squid3\" class=\"tile\">&nbsp</span>";
	document.getElementById("table").innerHTML=("<div id=\"table\" class=\"unselectable\">" + gameboard.join("") + "</div>");
}
//resets the game so it is able to be used again.
function reset() {
	
	guessesRemaining=7;
	document.getElementById("counter").textContent=(guessesRemaining);
	document.getElementById("guess").innerHTML=("Guess a number from 1 to 20!&nbsp <input id=\"inputNum\" type=\"number\">&nbsp <input id=\"guessButton\" value=\"Guess\" type=\"button\">");
	guessButton = document.getElementById("guessButton");
	ship0 = Math.floor(Math.random() * (18 - 1) + 1);
	locations = new Array();
	gameboard = new Array();
	for(var i=0;i<20;i++){
		gameboard[i] = "<span class=\"tile\">&nbsp</span>";
	}
	document.getElementById("table").innerHTML=("<div id=\"table\" class=\"unselectable\">" + gameboard.join("") + "</div>");
	guessesRight = 0;
	locations[0] = ship0;
	locations[1] = ship0 + 1;
	locations[2] = ship0 + 2;
	/*THIS IS USED IF YOU WANT TO "CHEAT". IT SHOWS THE LOCATION OF THE SHIP ON THE FIRST RUN, REMOVE THE COMMENT*/
	//alert("Correct: " + locations[0] + " " + locations[1] + " " + locations[2]);
	guessButton.onclick = playGame;
}
