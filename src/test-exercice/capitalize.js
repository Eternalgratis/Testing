const capitalize = (string) => {
  if (string !== string.charAt(0).toUpperCase() + string.slice(1));
  return string.charAt(0).toUpperCase() + string.slice(1);
};
module.exports = capitalize;