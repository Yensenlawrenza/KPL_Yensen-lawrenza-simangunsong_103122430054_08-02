const inputText = document.getElementById("inputText");
const hasil = document.getElementById("editor-kecil");
const hurufKecil = document.getElementById("hk");

const btnBesar = document.getElementById("huruf-besar");
const btnKecil = document.getElementById("huruf-kecil");

btnBesar.addEventListener("click", function () {
    let teks = inputText.value;
    hasil.value = teks.toUpperCase();
    hitungHuruf(teks);
});

btnKecil.addEventListener("click", function () {
    let teks = inputText.value;
    hasil.value = teks.toLowerCase();
    hitungHuruf(teks);
});

function hitungHuruf(teks) {
    let kecil = 0;

    for (let i = 0; i < teks.length; i++) {
        if (teks[i] >= 'a' && teks[i] <= 'z') {
            kecil++;
        }
    }

    hurufKecil.innerText = "Huruf kecil: " + kecil;
}

function modeGelap() {
    document.body.classList.remove("sepia-mode");
    document.body.classList.add("dark-mode");
}

function modeTerang() {
    document.body.classList.remove("dark-mode");
    document.body.classList.remove("sepia-mode");
}

function modeSepia() {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("sepia-mode");
}