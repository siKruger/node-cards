
/**
 * @module suits
 * @description
 *
 * Provides represesntations for the suits of cards (eg. "spades" or "hearts").
 *
 * ```javascript
 * const { suits } = require('cards');
 * ```
 */


// "Standard" Cards

const {Color} = require('./color');
/**
 * @alias module:suits.spades
 * @type {Suit}
 * @property name {'spades'}
 */
exports.yellow = new Color('yellow');

/**
 * @alias module:suits.hearts
 * @type {Suit}
 * @property name {'hearts'}
 */
exports.red = new Color('red');

/**
 * @alias module:suits.diamonds
 * @type {Suit}
 * @property name {'diamonds'}
 */
exports.blue = new Color('blue');

/**
 * @alias module:suits.clubs
 * @type {Suit}
 * @property name {'clubs'}
 */
exports.green = new Color('green');