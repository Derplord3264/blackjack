function card(value, face, suit) {
    this.value = value;
    this.face = face;
    this.suit = suit;
}
var player = {
    hand:[],
    wins:0,
    losses:0
};
var opponent = {
    hand:[],
    wins:0,
    losses:0
};

function deck() {
    this.faces = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    this.suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
    var deck = [];


    for (var i = 0; i < this.suits.length; i++) {
        for (var o = 0; o < this.faces.length; o++) {
            deck.push(new card(o + 1, this.faces[o], this.suits[i]));

        }
    }
    return deck;
}

function deckShuffle(deck) {
    //Classic Fisher-Yates Shuffle
    var m = deck.length,
        t, i;

    while (m) {
        i = Math.floor(Math.random() * m--);

        t = deck[m];
        deck[m] = deck[i];
        deck[i] = t;
    }
    return deck;
}
function main() {
    return deckShuffle(deck());
}

function dealHand(deck, numOfPlayers) {
    for (var i = 0; i < numOfPlayers; i++) {
        //create opponent hands
    }
    //create player hands
}