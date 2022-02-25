
/**
 * @class
 *
 * The main class for representing a color of cards
 *
 * @param name {string}
 */
class Color {
	constructor(name) {
		/** @member {string} */
		this.name = name;

		Object.freeze(this);
	}

	/**
	 * Returns a human-readable string representation of the suit object
	 *
	 * eg. `"<Suit name=spades>"`
	 *
	 * @methodof Suit
	 * @return {string}
	 */
	toString() {
		return `<Suit name=${this.name}>`;
	}
}

exports.Color = Color;
