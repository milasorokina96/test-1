const startCounter = require('./counter');

describe("Counter", () => {
    let counter = startCounter(10, 3);
    test('First', () => {
        expect(counter()).toBe(10);
    });
    test('Second', () => {
        expect(counter()).toBe(13);
    });
});
