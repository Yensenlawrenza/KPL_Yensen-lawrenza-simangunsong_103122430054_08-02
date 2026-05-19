function main() {
  const data = [
    "123",
    456,
    "hello",
    78.9,
    true,
  ];

  for (let i = 0; i < data.length; i++) {
    const result = processData(data[i]);
    console.log(`Item ${i + 1}: ${data[i]} -> ${result}`);
  }
}

function processData(data) {
  const str = String(data).toLowerCase(); // Fix Bug 1: konversi ke string dulu sebelum toLowerCase()
  const num = parseFloat(str);            // Fix Bug 2: gunakan parseFloat agar angka desimal terdeteksi
  if (!isNaN(num) && String(num) === str) {
    return `Number: ${num * 2}`;
  }
  return `Teks: ${str} (panjangnya: ${str.length})`;
}

main();