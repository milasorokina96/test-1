const isCharPresent = require('./isCharPresent');

describe("isCharPresent", () => {
    test('true', () => {
        expect(isCharPresent('javascript', 'j')).toBe(true);
    });
    test('false', () => {
        expect(isCharPresent('javascript', 'e')).toBe(false);
    });
});
