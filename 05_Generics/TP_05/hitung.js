function hitung(str, tipe) {
  let hasil = 0;

  if (tipe === "semua") {
    hasil = str.length;
  } else {
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== " ") {
        hasil++;
      }
    }
  }

  return hasil;
}

// contoh
let kata = "Bar bar bar";

console.log(hitung(kata, "semua")); // 11
console.log(hitung(kata, "huruf")); // 9