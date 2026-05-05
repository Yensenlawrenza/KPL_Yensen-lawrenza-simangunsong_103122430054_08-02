const express = require('express');
const app = express();

app.use(express.json());

// fungsi generate angka dari nama (deterministik)
function generateNumber(nama) {
    let total = 0;
    for (let i = 0; i < nama.length; i++) {
        total += nama.charCodeAt(i);
    }
    return (total % 100) + 1;
}

// endpoint POST /
app.post('/', (req, res) => {
    const { nama, tebakan } = req.body;

    if (!nama || tebakan === undefined) {
        return res.status(400).json({
            jawaban: "Input tidak lengkap"
        });
    }

    const angkaBenar = generateNumber(nama);

    if (tebakan === angkaBenar) {
        return res.json({
            jawaban: `Benar sekali! Tebakannya adalah ${angkaBenar}.`
        });
    } else if (tebakan > angkaBenar) {
        return res.json({
            jawaban: "Tebakanmu terlalu tinggi!"
        });
    } else {
        return res.json({
            jawaban: "Tebakanmu terlalu rendah!"
        });
    }
});

app.listen(3000, () => {
    console.log("Server jalan di http://localhost:3000");
});