import capitalize from "../scripts/capitalize";

test("Capitalize first letter: test 1", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("Handles an empty string", () => {
  expect(capitalize("")).toBe("");
});

test("capitalizes the first letter of an all lowercase word", () => {
  expect(capitalize("friend")).toBe("Friend");
});

test("handles all uppercase string", () => {
  expect(capitalize("SNAKE")).toBe("Snake");
});

test("handles mixed-case letters string", () => {
  expect(capitalize("JaVaScRiPt")).toBe("Javascript");
});

test("handles a string with numbers and special characters", () => {
  expect(capitalize("1st example!")).toBe("1st example!");
});
