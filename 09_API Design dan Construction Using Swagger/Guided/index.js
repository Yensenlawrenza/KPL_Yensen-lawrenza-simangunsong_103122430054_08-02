const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    const landing = {
        "pesan": "Cek /docs untuk melihat rincian API"
    };

    if (menu) {
        res.json(menu);
    } else {
        res.status(404).json({ error: "Menu tidak ditemukan" });
    }
});

app.listen(PORT, () => {
    console.log(`Server jalan di http://localhost:${PORT}`);
});
