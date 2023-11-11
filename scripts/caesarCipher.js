const shiftChar = (char, shift) => {
  const charCode = char.charCodeAt(0);
  // if character is part of the alphabet return its shifted character
  if (char.match(/[a-z]/i)) {
    const isUpperCase = char === char.toUpperCase();
    const shiftedCharCode =
      ((((charCode - (isUpperCase ? 65 : 97) + shift) % 26) + 26) % 26) +
      (isUpperCase ? 65 : 97);
    return String.fromCharCode(shiftedCharCode);
  }
  // return special characters
  return char;
};

const caesarCipher = (str, shift) => {
  return str
    .split("")
    .map((char) => shiftChar(char, shift))
    .join("");
};
export default caesarCipher;
