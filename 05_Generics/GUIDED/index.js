/**
 * @param {string} deret
 */
function fizzBuzz(deret) {
  let hasil = ""; // Inisialisasi string kosong untuk menampung hasil akhir

  // Mengubah string deret (misal: "1 2 3") menjadi array (misal: ["1", "2", "3"])
  let deretLarik = deret.split(' ');

  // Melakukan perulangan untuk setiap elemen di dalam array tersebut
  for (const elemen of deretLarik) {
    const n = +elemen; // Mengubah tipe data string menjadi number menggunakan unary plus (+)
    let fz = "";      // String penampung sementara untuk kata "Fizz" atau "Buzz" per angka

    // Fizz: Memeriksa apakah angka n habis dibagi 3
    if (n % 3 === 0) {
      fz += "Fizz"; // Jika ya, tambahkan kata "Fizz" ke variabel fz
    }
    
    // Buzz: Memeriksa apakah angka n habis dibagi 5
    if (n % 5 === 0) {
      fz += "Buzz"; // Jika ya, tambahkan kata "Buzz" (jadi "FizzBuzz" jika sudah ada "Fizz")
    }

    // Jika fz tidak kosong (artinya n habis dibagi 3 atau 5)
    if (fz != '') {
      hasil += `${fz} `; // Tambahkan isi fz ke hasil akhir diikuti spasi
      continue;           // Langsung lanjut ke angka berikutnya (skip baris di bawahnya)
    }

    // Jika n tidak habis dibagi 3 maupun 5, tambahkan angka aslinya ke hasil akhir
    hasil += `${n} `;
  }

  return hasil; // Mengembalikan string hasil akhir setelah semua angka selesai diproses
}