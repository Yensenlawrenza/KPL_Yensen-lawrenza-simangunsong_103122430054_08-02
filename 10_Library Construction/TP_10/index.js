/**
 * textUtils.js
 * Pustaka utilitas untuk menghitung huruf dan kata dalam teks.
 *
 * Aturan:
 *  - Hanya huruf A–Z (besar/kecil) yang dihitung sebagai "huruf"
 *  - Spasi tidak dihitung
 *  - Kata adalah urutan karakter yang dipisahkan oleh spasi/whitespace
 *    dan mengandung setidaknya satu huruf A–Z
 */

function countLetters(text) {
  if (typeof text !== "string") {
    throw new TypeError("Parameter harus berupa string.");
  }
  const matches = text.match(/[A-Za-z]/g);
  return matches ? matches.length : 0;
}

function countWords(text) {
  if (typeof text !== "string") {
    throw new TypeError("Parameter harus berupa string.");
  }
  const tokens = text.trim().split(/\s+/);
  const wordTokens = tokens.filter((token) => /[A-Za-z]/.test(token));
  return wordTokens.length;
}

if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = { countLetters, countWords };
} else if (typeof define === "function" && define.amd) {
  define([], function () {
    return { countLetters, countWords };
  });
} else {
  (typeof globalThis !== "undefined" ? globalThis : window).textUtils = {
    countLetters,
    countWords,
  };
}