const { deterministicPartitionKey } = require('./deterministicPartitionKey');

describe('deterministicPartitionKey', () => {
  it('Returns the literal "0" when given no input', () => {
    const trivialKey = deterministicPartitionKey();
    const expected = '0';
    expect(trivialKey).toBe(expected);
  });

  it('returns the expected value for valid input', () => {
    const input = { id: '123', type: 'test' };
    const expected = '4d1c62118c8fcd962a542ea90ea43f9ba1bc4d2286e0f6d9ba969787ade9b4ab2beac76e4215b21ca28b9bae872deb78d6a4a9e09a58c0560fe20903a4a7da2b';
    const key = deterministicPartitionKey(input);
    expect(key).toBe(expected);
  });

  it('handles non-string values correctly', () => {
    const input = { id: '123', partitionKey: 123 };
    const expected = '123';
    const key = deterministicPartitionKey(input);
    expect(key).toBe(expected);
  });

  it('truncates long keys to the maximum length', () => {
    const input = { id: '123', partitionKey: 'a'.repeat(300) };
    const expected = '7350d99d1a20435c283070f3613302edb7027fced163086b048bd3ded530c5cb7a8ced83d1c6fda78f8832c61fb02698d14252c6b4ecf6989b81b04ca99a6302';

    const key = deterministicPartitionKey(input);
    expect(key).toBe(expected);
    expect(key.length).toBe(128);
  });
});
