const bind = require('./bind');

describe("Bind", () => {
    function greeting(greeting, punctuation) {
        return `${greeting} ${this.userName}${punctuation}`;
      }
      const alex = { userName: "Alex" };
      const alexBound = bind(greeting, alex);
    test('First', () => {
        expect((alexBound("Hello", "!"))).toBe('Hello Alex!');
    });
});
