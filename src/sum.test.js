const sum = require('./sum.js');

test('adds 12+8',()=> {
    const result = sum(12, 8);
    expect(result).toBe(20);
    expect(result).toBeDefined();
    expect(result).toBeLessThan(30);
});