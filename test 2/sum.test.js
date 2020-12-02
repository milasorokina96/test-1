const calcSum = require('./sum');

describe("Get sum", () => {
  test('remember the number', () => {
    expect(calcSum(3)).toBe(3);
  });

  test('sums the passed parameter', () => {
    expect(calcSum(5)).toBe(8);
  });

  test('sums the passed parameter', () => {
    expect(calcSum(20)).toBe(28);
  });
});
