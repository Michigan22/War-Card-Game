
let suits = ['clubs', 'diamonds', 'hearts', 'spades'];
let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

class Deck {
    constructor() {
        this.cards = [];    
        this.createDeck()
    }
    
    createDeck() {
        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < ranks.length; j++) {
                this.cards.push(new Card(suits[i], ranks[j], values[j]));
            }
        }
        this.shuffleDeck()
    }

    shuffleDeck() {
        let location1, location2, tmp;
        for (let i = 0; i < 1000; i++) {
            location1 = Math.floor((Math.random() * this.cards.length));
            location2 = Math.floor((Math.random() * this.cards.length));
            tmp = this.cards[location1];
            this.cards[location1] = this.cards[location2];
            this.cards[location2] = tmp;
        }
    }

    displayDeck() {
        console.log("Deck:")
        for(let i = 0; i < this.cards.length; i++){
            console.log(this.cards[i].suit + " " + this.cards[i].rank)
        }
    }
}

class Card {
    constructor(suit, rank, value) {
        this.suit = suit;
        this.rank = rank;
        this.value = value;
    }
}

class Player {
    constructor(name) {
        this.playerName = name;
        this.playerCards = [];
        this.score = 0
    }

    
    displayPlayer() {
        console.log(this.playerName + ": " + this.score)
        for(let i = 0; i < this.playerCards.length; i++){
            console.log(this.playerCards[i].suit + " " + this.playerCards[i].rank)
        }
    }
}

class Game {
    constructor() {
        this.players = [new Player("Josh"), new Player("David")]
        this.deck = new Deck()
    }

    runGame() {
        this.dealDeck()
        this.play()
        this.displayScore()
    }

    displayScore() {
        for(let i = 0; i < this.players.length; i++) {
            this.players[i].displayPlayer()
        }

        if (this.players[0].score > this.players[1].score) {
            console.log(this.players[0].playerName + " is the winner")
        } else if (this.players[0].score < this.players[1].score) {
            console.log(this.players[1].playerName + " is the winner")
        } else {
            console.log("The game was a draw")
        }
    }

    play() {
        while (this.players[0].playerCards.length > 0) {
            let playerOneCard = this.players[0].playerCards.pop()
            let playerTwoCard = this.players[1].playerCards.pop()
        
            if (playerOneCard.value > playerTwoCard.value) {
                this.players[0].score++
            }
            else if (playerOneCard.value < playerTwoCard.value) {
                this.players[1].score++
            }
            else {
                //In case of a tie, nothing
            }
        }
    }

    dealDeck() {
        let length = this.deck.cards.length
        for (let i = 0; i < length; i++) {
            let card = this.deck.cards.pop()
            if (i % this.players.length == 0) {
                this.players[0].playerCards.push(card)
            } else {
                this.players[1].playerCards.push(card)
            }
        }
    }
}

// Where is begins

new Game().runGame()
