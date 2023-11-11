const capitalize = (str) => {
  if (str.length === 0) return "";
  let string = str.toLowerCase();
  return string[0].toUpperCase() + string.slice(1);
};
export default capitalize;
