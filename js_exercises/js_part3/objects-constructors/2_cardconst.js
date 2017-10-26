// Create a constructor Card. A card object will have 2 properties:
//
// point - the point value of the card: a number between 1 and 13.
// suit - the suit of the card: one of diamonds, clubs, hearts and spades.
// A card will be created thus:
//
// > var myCard = new Card(5, 'diamonds')
// And you can access the individual properties like:
//
// > myCard.point
// 5
// > myCard.suit
// 'diamonds'

// function Card(rank, suit) {
//   this.point = point;
//   this.suit = suit;
// }
//
// var myCard = new Card(5, 'diamonds')
//

function Card(rank, suit) {
  this.rank = rank;
  this.suit = suit;
}

function makeDeck() {
  this.ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  this.suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
  let cards = [];
  // Create 52 cards
  for(var i = 0; i < this.suits.length; i++) {
    for(var j = 0; j < this.ranks.length; j++) {
      cards.push(new Card(this.ranks[j], this.suits[i]));
    }
  }
  return cards
}

cards = makeDeck()




// for (var i = 0; i < cards.length; i++) {
//
// }
