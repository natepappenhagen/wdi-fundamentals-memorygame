// Array for all cards ////////////////////////

var cards = [
  {
    rank: 'queen',
    suit: 'hearts',
    cardImage: 'images/queen-of-hearts.png'
  },
  {
    rank: 'queen',
    suit: 'diamonds',
    cardImage: 'images/queen-of-diamonds.png'
  },
  {
    rank: 'king',
    suit: 'hearts',
    cardImage: 'images/king-of-hearts.png'
  },
  {
    rank: 'king',
    suit: 'diamonds',
    cardImage: 'images/king-of-diamonds.png'
  }
];


// Array for cards in play ///////////////
var cardsInPlay = [];

// Create a function to check for a match
var checkForMatch = function () {
  // Check for equality for flips. Gives alerts.
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");

  }
};


// Function for flipping a card
var flipCard = function () {
  // 'data-id'of card that was just flipped and cache
  cardId = this.getAttribute('data-id');

  // Add card to 'cardsInPlay' array
  cardsInPlay.push(cards[cardId].card);

  // Display the card's image
  this.setAttribute('src', cards[cardId].cardImage);




  // two cards played??
  if (cardsInPlay.length === 2) {
    // THEN  'checkForMatch' function
    checkForMatch();
  }
};

// Function to create board
var createBoard = function () {
  // loop through cards to create 'card elements' for board
  for (var i = 0; i < cards.length; i++) {
    // create image element
    var cardElement = document.createElement('img');

    // set the 'src' to show back of card
    cardElement.setAttribute('src', 'images/back.png');

    //set 'data-id' as index of curent element
    cardElement.setAttribute('data-id', i);

    // event listener (click) => flipCard
    cardElement.addEventListener('click', flipCard);

    // append card to board
    document.getElementById('game-board').appendChild(cardElement);


  }

};

//// Call the function to "play".

createBoard();

