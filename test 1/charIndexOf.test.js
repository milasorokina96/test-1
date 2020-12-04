const charIndexOf = require('./charIndexOf');

describe("charIndexOf", () => {
    test('index', () => {
        expect(charIndexOf('javascript', 'j')).toBe(0);
    });
    test('-1', () => {
        expect(charIndexOf('javascript', 'q')).toBe(-1);
    });
});