const express = require('express');
const app = express();
const PORT = 3000;

// Data dummy
const menu = [
  { id: 1, nama: "bakmi" },
  { id: 2, nama: "ramen" },
  { id: 3, nama: "bakmi" }
];

// Endpoint root biar gak error
app.get('/', (req, res) => {
  res.send("API MENU AKTIF 🚀");
});

// Endpoint utama sesuai soal
app.get('/menu', (req, res) => {
  const kategori = [...new Set(menu.map(item => item.nama))];

  res.json({
    kategori_tersedia: kategori
  });
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server jalan di http://localhost:${PORT}`);
});