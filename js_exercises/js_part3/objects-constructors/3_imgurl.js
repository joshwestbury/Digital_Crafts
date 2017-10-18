// getImageUrl()
//
// Add a getImageUrl method to card objects by adding it as a property to Card.prototype. The method should return the URL path to the png image file for the card.
//
// > myCard.getImageUrl()
// 'images/5_of_diamonds.png'


function Card(rank, suit) {
  this.rank = rank;
  this.suit = suit;
}

var myCard = new Card(5, 'diamonds')

Card.prototype.getImageUrl = function(rank, suit) {
  console.log(`images/${this.rank}_of_${this.suit}.png`)
};

myCard.getImageUrl()
