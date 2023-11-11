const analyzeArray = (arr) => {
  // edge case where array is empty
  if (arr.length === 0) {
    return { average: NaN, min: undefined, max: undefined, length: 0 };
  }
  // calculations
  const average = arr.reduce((prev, curr) => (prev += curr), 0) / arr.length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const length = arr.length;
  return { average, min, max, length };
};

export default analyzeArray;
