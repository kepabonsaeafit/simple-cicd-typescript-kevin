/**
 * Returns the quotient of two numbers.
 * Design decision: division by zero throws an Error instead of returning null,
 * so the failure is explicit and cannot propagate silently to the UI.
 * @throws {Error} when b is 0
 */
function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
}

// Expose to window so the HTML script can call it
(window as unknown as { divide: typeof divide }).divide = divide;
