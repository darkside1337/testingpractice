import reverseString from "../scripts/reverseString";

// syntax test("name of test", () =>
// expect(function("input")).toBe("expected"))

test("reverses a normal string", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("reverse a sentence", () => {
  expect(reverseString("hello my friend")).toBe("dneirf ym olleh");
});
test("does not interfere with capitalization", () => {
  expect(reverseString("jAvascript")).toBe("tpircsavAj");
});
