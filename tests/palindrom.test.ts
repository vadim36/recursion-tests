const isPalindrom = require('../src/palindrom.ts');

describe('isPalindrome', () => {
  test('Correct palindrom', () => {
    expect(isPalindrom('abccba')).toBeTruthy();
  });
  test('Uncorrect palindrom', () => {
    expect(isPalindrom('abc')).toBeFalsy();
  });
  test('Uncorrect value', () => {
    expect(isPalindrom(null)).toBeFalsy();
  });
});