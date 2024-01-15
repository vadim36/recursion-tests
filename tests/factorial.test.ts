import factorial from "../src/factorial";

describe('factorial', () => {
  test('Correct value', ():void => {
    expect(factorial(5)).toBe(120);
  });
  test('Uncorrect smaller value', ():void => {
    expect(factorial(-1)).toBeFalsy();
  });
  test('Uncorrect bigger value', ():void => {
    expect(factorial(1000)).toBeFalsy();
  });
  test('Correct smaller value', ():void => {
    expect(factorial(0)).toBe(0);
  });
  test('Correct bigger value', ():void => {
    expect(factorial(100)).toBe(9.33262154439441e+157);
  });
});