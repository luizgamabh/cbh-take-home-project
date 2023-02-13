const crypto = require('crypto');

/**
 * Generates a SHA3-512 hash of the given data
 *
 * @param data
 * @returns {string}
 */
const generateHash = (data) =>
  crypto.createHash('sha3-512').update(data).digest('hex');

module.exports = {
  isString, generateHash
};
