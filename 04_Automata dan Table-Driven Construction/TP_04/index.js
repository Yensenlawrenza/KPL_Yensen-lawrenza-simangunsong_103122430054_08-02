const inputText = document.getElementById("inputText");
const hasil = document.getElementById("editor-kecil");
const hurufKecil = document.getElementById("hk");

const btnBesar = document.getElementById("huruf-besar");
const btnKecil = document.getElementById("huruf-kecil");

// tombol huruf besar
btnBesar.addEventListener("click", function () {
    let teks = inputText.value;
    hasil.value = teks.toUpperCase();
    hitungHuruf(teks);
});

// tombol huruf kecil
btnKecil.addEventListener("click", function () {
    let teks = inputText.value;
    hasil.value = teks.toLowerCase();
    hitungHuruf(teks);
});

// hitung huruf kecil
function hitungHuruf(teks) {
    let kecil = 0;

    for (let i = 0; i < teks.length; i++) {
        if (teks[i] >= 'a' && teks[i] <= 'z') {
            kecil++;
        }
    }

    hurufKecil.innerText = "Huruf kecil: " + kecil;
}

// mode gelap
function modeGelap() {
    document.body.classList.add("dark-mode");
}

// mode terang
function modeTerang() {
    document.body.classList.remove("dark-mode");
}