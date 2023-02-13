const { generateHash, isString } = require("./utils");

describe("generateHash", () => {
  it("Returns a valid for a given string input", () => {
    const trivialKey = generateHash('test');
    const expected = '9ece086e9bac491fac5c1d1046ca11d737b92a2b2ebd93f005d7b710110c0a678288166e7fbe796883a4f2e9b3ca9f484f521d0ce464345cc1aec96779149c14';
    expect(trivialKey).toBe(expected);
  });
});

describe("isString", () => {
  it("Returns true for a given string param", () => {
    const trivialKey = isString('test');
    expect(trivialKey).toBeTruthy();
  });

  it("Returns false for non-string param", () => {
    const params = [
      1, true, null, BigInt(2), Symbol(), {}, [], () => {}, undefined
    ];
    params.forEach(param => {
      expect(isString(param)).toBeFalsy();
    })
  });
});
