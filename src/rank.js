
/**
 * @class
 * 
 * The main base class for representing a rank of card (eg. "ace" or "king")
 *
 * @param shortName {string}
 * @param longName {string}
 */
class Rank {
	constructor(shortName, longName, absoluteVal) {
		/** @member {string} */
		this.shortName = shortName;

		/** @member {string} */
		this.longName = longName;


		/** @member {number} deprecated*/
		this.absoluteVal = absoluteVal;
	}

	/**
	 * Returns a human-readable string representation of the rank object
	 *
	 * eg. `"<Rank shortName=A longName=Ace absoluteVal=13>"`
	 *
	 * @return {string}
	 */
	toString() {
		return `<Rank shortName=${this.shortName} longName=${this.longName}>`;
	}
}

exports.Rank = Rank;
