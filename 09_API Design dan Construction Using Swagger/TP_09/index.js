const express = require('express');
const app = express();
const PORT = 3000;

const menu = [
  { id: 1, nama: "bakmi" },
  { id: 2, nama: "ramen" },
  { id: 3, nama: "bakmi" }
];

app.get('/', (req, res) => {
  res.send("API MENU AKTIF 🚀");
});

app.get('/menu', (req, res) => {
  const kategori = [...new Set(menu.map(item => item.nama))];

  res.json({
    kategori_tersedia: kategori
  });
})

app.listen(PORT, () => {
  console.log(`Server jalan di http://localhost:${PORT}`);
});