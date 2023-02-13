const { isString } = require('./isString');

describe('isString', () => {
  it('Should return true for a string param', () => {
    const trivialKey = isString('test');
    expect(trivialKey).toBeTruthy();
  });

  it('Should return false for non-string param', () => {
    const params = [
      1, true, null, BigInt(2), Symbol(), {}, [], () => {}, undefined
    ];
    params.forEach(param => {
      expect(isString(param)).toBeFalsy();
    })
  });
})
