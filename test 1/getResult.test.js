const getResult = require('./getResult');

describe("Get result", () => {
    test('sum', () => {
        expect(getResult(1, 2, '+')).toBe(3);
    });
    test('product', () => {
        expect(getResult(1, 2, '*')).toBe(2);
    });
    test('difference', () => {
        expect(getResult(2, 1, '-')).toBe(1);
    });
    test('quotient', () => {
        expect(getResult(2, 1, '/')).toBe(2);
    });
    test('modulo', () => {
        expect(getResult(5, 2, '%')).toBe(1);
    });
    test('power', () => {
        expect(getResult(2, 2, '**')).toBe(4);
    });
    test('false', () => {
        expect(getResult(1, 2, 5)).toBe(false);
    });
});
