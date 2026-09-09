/**
 * Unit tests for subtract()
 * Loads the compiled subtract.js so window.subtract is available (same as in the browser).
 */
declare global {
  interface Window {
    subtract: (a: number, b: number) => number;
  }
}

beforeAll(() => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("./subtract.js");
});

describe("subtract", () => {
  it("subtracts two positive numbers", () => {
    expect(window.subtract(5, 3)).toBe(2);
  });

  it("returns a negative result when the subtrahend is larger", () => {
    expect(window.subtract(3, 5)).toBe(-2);
  });

  it("returns the same number when subtracting 0", () => {
    expect(window.subtract(7, 0)).toBe(7);
  });

  it("subtracts a negative number (double negative)", () => {
    expect(window.subtract(5, -3)).toBe(8);
  });

  it("returns 0 when both are 0", () => {
    expect(window.subtract(0, 0)).toBe(0);
  });
});

export {};
