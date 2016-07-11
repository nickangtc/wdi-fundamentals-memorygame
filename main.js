var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var gameBoard = document.getElementById('game-board');
var createBoard = function() {
	shuffle(cards);
	for (var j = 0; j < cards.length; j++) {
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		cardElement.setAttribute('data-card', cards[j]);
		cardElement.addEventListener('click', isTwoCards);
		gameBoard.appendChild(cardElement);
	}
	console.log(document.getElementById('game-board').value);
}

var isTwoCards = function() {
	if (this.getAttribute('data-card') == "king") {
		this.innerHTML = '<img src="./imgs/king.png" alt="king" />';
	}
	else if (this.getAttribute('data-card') == "queen") {
		this.innerHTML = '<img src="./imgs/queen.png" alt="queen" />';
	}

	cardsInPlay.push(this.getAttribute('data-card'));
	if (cardsInPlay.length == 2) {
		isMatch(cardsInPlay); // use function to check values match
		cardsInPlay = []; // reset for next try
	}
}
var isMatch = function(cardsInPlay) {
	if (cardsInPlay[0] == cardsInPlay[1]) {
		alert ("YOU WON! Luck smiles down upon you.");
	}
	else {
		alert ("You lose! Now get back up and try again.");
	}
	document.getElementById('game-board').innerHTML = '';
	createBoard();
}

/* 
To shuffle deck after every game round.
Fisher-Yates Shuffle, code obtained at:
http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
*/
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

createBoard();
