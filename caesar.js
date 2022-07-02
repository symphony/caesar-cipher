/** keeps number within positive range (with optional starting position) */
const modulo = (n, m, start = 0) => {
  return (n + m - start) % m + start;
};

const encrypt = (plaintext, key) => {
  const range = 26; // alphabet length
  const ansiOffset = 97; // small letters start at 97

  return plaintext.split('').map((char) => {
    if (char === ' ') return char;

    const ansiShifted = modulo(char.charCodeAt() + key, range, ansiOffset);
    return String.fromCharCode(ansiShifted);
  }).join('');
};

// export default encrypt;

// one line version
export default (s, k) => s.split('').map((x) => x === ' ' ? x : String.fromCharCode((x.charCodeAt() + k - 97 + 26) % 26 + 97)).join('');