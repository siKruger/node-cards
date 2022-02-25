/**
 * @class WizardDeck
 * @extends Deck
 */
const {Deck} = require('../deck');
const {WizardCard} = require('../card/wizardCard');
const { red, green, blue, yellow} = require('../colors/colors');
const { one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, wizard, fool} = require('../ranks/standard');


class WizardDeck extends Deck {
	constructor() {
		super(generateDeck());
	}
}

exports.WizardDeck = WizardDeck;


const ranks = [one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, wizard, fool];
const colors = [red, green, blue, yellow];

const generateDeck = () => {
	const cards = [ ];

	colors.forEach((color) => {
		ranks.forEach((rank) => {
			cards.push(new WizardCard(color, rank));
		});
	});

	return cards;
};


