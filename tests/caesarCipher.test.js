import caesarCipher from "../scripts/caesarCipher";

test("Initial cipher test:", () => {
  expect(caesarCipher("abc", 1));
});
test("test with punctuation", () => {
  expect(caesarCipher("Hello, World!", 5)).toBe("Mjqqt, Btwqi!");
});
