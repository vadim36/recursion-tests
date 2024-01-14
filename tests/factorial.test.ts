import factorial from "../src/factorial";

describe('factorial', () => {
  test('Correct value', () => {
    expect(factorial(5)).toBe(120);
  });
  test('Uncorrect smaller value', () => {
    expect(factorial(-1)).toBeFalsy();
  });
  test('Uncorrect bigger value', () => {
    expect(factorial(1000)).toBeFalsy();
  });
  test('Correct smaller value', () => {
    expect(factorial(0)).toBe(0);
  });
  test('Correct bigger value', () => {
    expect(factorial(100)).toBe(9.33262154439441e+157);
  });
});