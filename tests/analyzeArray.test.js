import analyzeArray from "../scripts/analyzeArray";

test("analyzeArray returns correct results for an array of positive numbers", () => {
  const result = analyzeArray([1, 2, 3, 4, 5]);
  expect(result).toEqual({ average: 3, min: 1, max: 5, length: 5 });
});

test("analyzeArray returns correct results for an array of negative numbers", () => {
  const result = analyzeArray([-5, -3, -1, -2, -4]);
  expect(result).toEqual({ average: -3, min: -5, max: -1, length: 5 });
});

test("analyzeArray returns correct results for an array with a mix of positive and negative numbers", () => {
  const result = analyzeArray([-2, 0, 3, -1, 5]);
  expect(result).toEqual({ average: 1, min: -2, max: 5, length: 5 });
});

test("analyzeArray returns correct results for an array with repeated numbers", () => {
  const result = analyzeArray([2, 2, 2, 2, 2]);
  expect(result).toEqual({ average: 2, min: 2, max: 2, length: 5 });
});

test("analyzeArray returns correct results for an empty array", () => {
  const result = analyzeArray([]);
  expect(result).toEqual({
    average: NaN,
    min: undefined,
    max: undefined,
    length: 0,
  });
});
