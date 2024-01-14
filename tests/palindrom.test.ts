import isPalindrom from "../src/palindrom";

describe('isPalindrome', () => {
  test('Correct palindrom', () => {
    expect(isPalindrom('abccba')).toBeTruthy();
  });
  test('Uncorrect palindrom', () => {
    expect(isPalindrom('abc')).toBeFalsy();
  });
});