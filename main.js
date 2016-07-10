var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

// if (cardTwo === cardFour) {
// 	alert ("You found a match!");
// }
// else if (cardTwo !== cardFour) {
// 	alert ("Sorry, try again.");
// }

var gameBoard = document.getElementById('game-board');
var createBoard = function() {
	for (var j = 0; j < 4; j++) {
		var newCard = document.createElement('div');
		newCard.className = 'card';
		gameBoard.appendChild(newCard);
	}
	console.log(document.getElementById('game-board').value);
}

createBoard();
