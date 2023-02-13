const crypto = require("crypto");

/**
 * Checks if the given value is a string
 *
 * @param value
 * @returns {boolean}
 */
const isString = (value) => typeof value === 'string';


/**
 * Generates a SHA3-512 hash of the given data
 *
 * @param data
 * @returns {string}
 */
const generateHash = (data) =>
  crypto.createHash("sha3-512").update(data).digest("hex");

module.exports = {
  isString, generateHash
};
