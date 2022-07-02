/** keeps number within positive range (with optional starting position) */
const modulo = (n, m, start = 0) => {
  return (n - start + m) % m + start;
};

const shiftChar = (char, amount = 0) => {
  const range = 26; // alphabet length
  const ansiOffset = 97; // small letters start at 97
  const shifted = modulo(char.charCodeAt() + amount, range, ansiOffset);
  return String.fromCharCode(shifted);
};

const encrypt = (plaintext, key) => {
  return plaintext.split('').map((char) => char === ' ' ? char : shiftChar(char, key)).join('');
};

export default encrypt;