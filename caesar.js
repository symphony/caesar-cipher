/** keeps number within positive range (with optional starting position) */
const modulo = (n, m, start = 0) => {
  return (n - start + m) % m + start;
};

const shiftChar = (char, amount) => {
  const range = 26; // alphabet length
  const ansiOffset = 97; // small letters start at 97
  const shifted = modulo(char.charCodeAt() + amount, range, ansiOffset);
  return String.fromCharCode(shifted);
};

const encrypt = (plaintext, key) => {
  return plaintext.split('').map((char) => char === ' ' ? char : shiftChar(char, key)).join('');
};

// export default encrypt;

// one line version
export default (s, k) => s.split('').map((x) => x === ' ' ? x : String.fromCharCode((x.charCodeAt() + k - 97 + 26) % 26 + 97)).join('');