const functions = require("./functions");

describe("functions", () => {
  test("strLength should return the number of char in a string", () => {
    expect(functions.strLength("boy")).toBe(3);
  });
  test("strLength should should throw an error because the string is empty", () => {
    expect(functions.strLength("")).toBeFalsy();
  });
  test("strLength should should throw an error because the string is empty", () => {
    expect(functions.strLength("indifferent")).toBeFalsy();
  });

  test("reverseString should return a reversed string", () => {
    expect(functions.reverseString("hello")).toEqual("olleh");
  });
});

describe("add function returns the sum of 2 integers", () => {
  test("2+3 should return 5", () => {
    expect(functions.calculator.add(2, 3)).toBe(5);
  });
  test("4+3 should return 7", () => {
    expect(functions.calculator.add(4, 3)).toBe(7);
  });
    test("2+6 should return 8", () => {
      expect(functions.calculator.add(2, 6)).toBe(8);
    });
});
describe("substract function returns the difference between 2 integers", () => {
  test("5-3 should return 2", () => {
    expect(functions.calculator.substract(5, 3)).toBe(2);
  });
  test("9-3 should return 6", () => {
    expect(functions.calculator.substract(9, 3)).toBe(6);
  });
  test("6-1 should return 8", () => {
    expect(functions.calculator.substract(6, 1)).toBe(5);
  });
});
describe("divide function returns the division of 2 integers", () => {
  test("6/3 should return 5", () => {
    expect(functions.calculator.divide(6, 3)).toBe(2);
  });
  test("8/2 should return 7", () => {
    expect(functions.calculator.divide(8, 2)).toBe(4);
  });
  test("18/6 should return 3", () => {
    expect(functions.calculator.divide(18, 6)).toBe(3);
  });
});
describe("multiply function returns the multiplition of 2 integers", () => {
  test("2*3 should return 6", () => {
    expect(functions.calculator.multiply(2, 3)).toBe(6);
  });
  test("4*3 should return 7", () => {
    expect(functions.calculator.multiply(4, 3)).toBe(12);
  });
  test("2*8 should return 8", () => {
    expect(functions.calculator.multiply(2, 8)).toBe(16);
  });
});
describe("capitalize changes the first letter of the word to a cpital letter",() => {
  test('should capitalize the first letter of the word', () => { 
    expect(functions.capitalize('hello')).toBe('Hello')
   })
})