
const { Deck } = require('../deck');
const { Card } = require('../card');
const { spades, hearts, diamonds, clubs } = require ('../suits');
const { ace, seven, eight, nine, ten, jack, queen, king } = require('../ranks');

/**
 * @class PiquetDeck
 * @extends Deck
 */
class PiquetDeck extends Deck {
	constructor() {
		super(generateDeck());
	}
}

exports.PiquetDeck = PiquetDeck;

const suits = [ spades, hearts, diamonds, clubs ];
const ranks = [ ace, seven, eight, nine, ten, jack, queen, king ];

const generateDeck = () => {
	const cards = [ ];

	suits.forEach((suit) => {
		ranks.forEach((rank) => {
			cards.push(new Card(suit, rank, getAbsVal(rank)));
		});
	});

	return cards;
};

const getAbsVal = (rank) => {
    switch (rank.longName) {
        case "Seven":
            return 7;

        case "Eight":
            return 8;

        case "Nine":
            return 9;

        case "Ten":
            return 10;

        case "Jack":
            return 11;

        case "Queen":
            return 12;

        case "King":
            return 13;

        case "Ace":
            return 14;
    }
}
