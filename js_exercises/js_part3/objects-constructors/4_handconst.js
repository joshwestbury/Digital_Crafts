// Hand constructor
//
// A hand is simply represented as a collection of cards, but it would also be convenient for a hand to be able to return it's point value. We would like to be able to do this with a Hand constructor:
//
// > var myHand = new Hand()
// > myHand.addCard(new Card(5, 'diamonds'))
// > myHand.addCard(new Card(13, 'spades'))
// > myHand.getPoints()
// 15
// Implement a Hand constructor that will allow the code above to work. Hint: you will want to store as a property of a hand object - an array of card objects.
//
// //

class Card{
    constructor (rank, suit) {
        this.rank = rank;
        this.suit = suit;
    }
}

class Deck{
    constructor (rank, suit) {
        this.ranks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        this.suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
        this.cards = [];
    }
        // Create 52 cards
    makeDeck () {
        for(var i = 0; i < this.suits.length; i++) {
          for(var j = 0; j < this.ranks.length; j++) {
            this.cards.push(new Card(this.ranks[j], this.suits[i]));
            }
        }
    }
    //print out deck
    readDeck() {
        console.log(this.cards)
    }
}

var myDeck = new Deck()
myDeck.makeDeck()



class Hand {
    constructor (dealtCard) {
        this.dealtCard = []
    }
    addCard (card1, card2) {
        var card1 = myDeck.cards.shift()
        var card2 = myDeck.cards.pop()
        return this.dealtCard.push(card1, card2)
    }

    getPoints () {
        var total = 0
        for (var i = 0; i < this.dealtCard.length; i++) {
          if (this.dealtCard[i].rank < 10) {
            total += this.dealtCard[i].rank
          }
          else {
            total += 10
          }
        } return console.log(total)
      }
    }

var myHand = new Hand()
myHand.addCard()
myHand.getPoints()
