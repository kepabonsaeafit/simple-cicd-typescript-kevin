/**
 * Unit tests for divide()
 * Loads the compiled divide.js so window.divide is available (same as in the browser).
 */
declare global {
  interface Window {
    divide: (a: number, b: number) => number;
  }
}

beforeAll(() => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("./divide.js");
});

describe("divide", () => {
  it("divides two positive numbers exactly", () => {
    expect(window.divide(10, 2)).toBe(5);
  });

  it("returns a decimal when the division is not exact", () => {
    expect(window.divide(7, 2)).toBe(3.5);
  });

  it("returns 0 when the dividend is 0", () => {
    expect(window.divide(0, 5)).toBe(0);
  });

  it("returns a negative result with one negative operand", () => {
    expect(window.divide(-10, 2)).toBe(-5);
  });

  it("returns a positive result with two negative operands", () => {
    expect(window.divide(-10, -2)).toBe(5);
  });

  it("throws an Error when dividing by zero", () => {
    expect(() => window.divide(10, 0)).toThrow("Division by zero is not allowed");
  });

  it("throws an Error when dividing zero by zero", () => {
    expect(() => window.divide(0, 0)).toThrow(Error);
  });
});

export {};
