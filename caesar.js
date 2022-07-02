const mod = (n, m, start = 0) => {
  return (n - start + m) % m + start;
};

const shiftChar = (char, amount = 0) => {
  const range = 26; // alphabet length
  const ansiOffset = 97; // small letters start at 97
  const shifted = mod(char.charCodeAt() + amount, range, ansiOffset);
  return String.fromCharCode(shifted);
};

const encrypt = (plaintext, key) => {
  return plaintext.split('').map((c) => c === ' ' ? c : shiftChar(c, key)).join('');
};

export default encrypt;