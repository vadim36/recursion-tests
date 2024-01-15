import isPalindrom from "../src/palindrom";

describe('isPalindrome', () => {
  test('Correct palindrom', ():void => {
    expect(isPalindrom('abccba')).toBeTruthy();
  });
  test('Uncorrect palindrom', ():void => {
    expect(isPalindrom('abc')).toBeFalsy();
  });
});