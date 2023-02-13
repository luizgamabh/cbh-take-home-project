const { isString, generateHash } = require("./utils");
const { TRIVIAL_PARTITION_KEY, MAX_PARTITION_KEY_LENGTH } = require('./dpk.constants');

/**
 * Returns a deterministic partition key for the given event
 * 
 * @param event
 * @returns {string}
 */
exports.deterministicPartitionKey = (event) => {
  // As default, candidate will be the trivial partition key
  // If no event is provided, will return it
  let candidate = TRIVIAL_PARTITION_KEY;

  if (event) {
    // If an event is provided, will try to get the partition key from it
    const { partitionKey } = event
    // If the event has a partition key, will use that
    // Otherwise, will use a hash of the event
    candidate = partitionKey || generateHash(JSON.stringify(event));
  }

  if (!isString(candidate)) {
    // If the candidate is not a string, will stringify it
    candidate = JSON.stringify(candidate);
  }

  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    // If the candidate is too long, will hash it
    candidate = generateHash(candidate);
  }

  return candidate;
};
