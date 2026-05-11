const { countLetters, countWords } = require("./index");

let passed = 0;
let failed = 0;

function assert(description, actual, expected) {
  if (actual === expected) {
    console.log(`  ✅  ${description}`);
    passed++;
  } else {
    console.error(`  ❌  ${description}`);
    console.error(`       Diharapkan : ${expected}`);
    console.error(`       Didapat    : ${actual}`);
    failed++;
  }
}

console.log("\ncountLetters");
assert("String kosong",                        countLetters(""),                          0);
assert("Hanya spasi",                          countLetters("   "),                       0);
assert("Hanya huruf kecil",                    countLetters("hello"),                     5);
assert("Hanya huruf besar",                    countLetters("WORLD"),                     5);
assert("Campuran besar & kecil",               countLetters("HeLLo"),                     5);
assert("Huruf + spasi",                        countLetters("a b c"),                     3);
assert("Huruf + angka",                        countLetters("abc123"),                    3);
assert("Huruf + tanda baca",                   countLetters("Hello, World!"),             10);
assert("Hanya angka",                          countLetters("12345"),                     0);
assert("Teks panjang campuran",                countLetters("Saya punya 2 kucing & 3 anjing!"), 21);

console.log("\ncountWords");
assert("String kosong",                        countWords(""),                            0);
assert("Hanya spasi",                          countWords("   "),                         0);
assert("Satu kata",                            countWords("Hello"),                       1);
assert("Dua kata",                             countWords("Hello World"),                 2);
assert("Tiga kata",                            countWords("satu dua tiga"),               3);
assert("Spasi berlebih di tengah",             countWords("a    b    c"),                 3);
assert("Spasi di awal & akhir",                countWords("  hello world  "),             2);
assert("Token angka tidak dihitung",           countWords("mix 123 angka"),               2);
assert("Token tanda baca tidak dihitung",      countWords("hello !!! world"),             2);
assert("Hanya angka",                          countWords("1 2 3"),                       0);

console.log(`\nHasil: ${passed} lulus, ${failed} gagal\n`);
if (failed > 0) process.exitCode = 1;