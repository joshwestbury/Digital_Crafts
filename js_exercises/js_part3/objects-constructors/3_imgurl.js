// getImageUrl()
//
// Add a getImageUrl method to card objects by adding it as a property to Card.prototype. The method should return the URL path to the png image file for the card.
//
// > myCard.getImageUrl()
// 'images/5_of_diamonds.png'


class Card{
    constructor (rank, suit) {
        this.rank = rank;
        this.suit = suit;
    }
    getImageUrl (rank, suit) {
        var cardName;
        if (this.rank == 1) {
            cardName = 'ace';
        } else if (this.rank == 11) {
            cardName = 'jack';
        } else if (this.rank ==12) {
            cardName = 'queen';
        } else if (this.rank == 13) {
            cardName = 'king';
        } else {
            cardName = this.rank;
        }
        return `images/${cardName}_of_${this.suit}.png`
    }
}

var myCard = new Card(5, 'diamonds')

myCard.getImageUrl()
