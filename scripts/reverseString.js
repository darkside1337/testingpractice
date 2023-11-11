const reverseString = (str) => {
  const temp = [];
  for (let i = str.length - 1; i >= 0; i--) {
    temp.push(str[i]);
  }
  return temp.join("");
};

export default reverseString;
