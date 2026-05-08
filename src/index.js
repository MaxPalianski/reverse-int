module.exports = function reverse(n) {
  const absoluteN = Math.abs(n);
  const reversedString = absoluteN.toString().split('').reverse().join('');
  return Number(reversedString);
};
