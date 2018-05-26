// Array for all cards
var cards = ['queen', 'queen', 'king', 'king'];

// Array for cards in play
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
var flipCard = function (cardId) {

  // Print card just flipped to console. Notice the connection
  // between "cardId" and the "cards[cardId]" - Interesting!
  console.log("User flipped " + cards[cardId]);

  // Push card flipped to "cardsInPlay" array. Same trick with "cardId".
  cardsInPlay.push(cards[cardId]);

  // Check to see if two cards have been played
  if (cardsInPlay.length === 2) {
    // If so, call the checkForMatch function
    checkForMatch();
  }
};
//// Call the function to "play".
// Supply an index as the argument for the function
flipCard(0);
flipCard(2);