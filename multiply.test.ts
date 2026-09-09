/**
 * Unit tests for multiply()
 * Loads the compiled multiply.js so window.multiply is available (same as in the browser).
 */
declare global {
  interface Window {
    multiply: (a: number, b: number) => number;
  }
}

beforeAll(() => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("./multiply.js");
});

describe("multiply", () => {
  it("multiplies two positive numbers", () => {
    expect(window.multiply(4, 3)).toBe(12);
  });

  it("returns 0 when one operand is 0", () => {
    expect(window.multiply(9, 0)).toBe(0);
  });

  it("returns a negative result with one negative operand", () => {
    expect(window.multiply(-4, 3)).toBe(-12);
  });

  it("returns a positive result with two negative operands", () => {
    expect(window.multiply(-4, -3)).toBe(12);
  });

  it("returns the same number when multiplying by 1", () => {
    expect(window.multiply(7, 1)).toBe(7);
  });
});

export {};
