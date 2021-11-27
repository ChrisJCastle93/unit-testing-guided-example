const { multiply } = require('./../calculator.js');

describe('Multiply', () => {

    test("should be the result of the multiplication of both values", () => {
        const result = multiply(5, 10);
        expect(result).toBe(50);
      });
      

    test("should be a negative number", () => {
        const result = multiply(-5, 10);
        expect(result).toBe(-50);
      });

    test("should be the result of the multiplication of both values", () => {
        const result = multiply(5, 0);
        expect(result).toBe(0);
      });

});