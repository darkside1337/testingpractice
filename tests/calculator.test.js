import calculator from "../scripts/calculator";

test("addition test: 5 + 4 = 9", () => {
  expect(calculator.add(5, 4)).toBe(9);
});

test("subtraction test: 5 - 4 = 1", () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});
test("division test: 5 / 4 = 1.25", () => {
  expect(calculator.divide(5, 4)).toBe(1.25);
});
test("multiplication test: 5 * 4 = 20", () => {
  expect(calculator.multiply(5, 4)).toBe(20);
});
