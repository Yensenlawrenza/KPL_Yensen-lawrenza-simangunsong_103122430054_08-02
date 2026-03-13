const textarea = document.getElementById('inputText');
const hasil = document.getElementById('editor-kecil');
const hk = document.getElementById('hk');

const btnBesar = document.getElementById('huruf-besar');
const btnKecil = document.getElementById('huruf-kecil');


/* Hitung huruf kecil otomatis */
textarea.addEventListener("input", function () {

    const text = textarea.value;
    const jumlah = (text.match(/[a-z]/g) || []).length;

    hk.innerText = "Huruf kecil: " + jumlah;

});


/* Ubah ke huruf besar */
btnBesar.addEventListener("click", function () {

    const text = textarea.value;
    hasil.value = text.toUpperCase();

});


/* Ubah ke huruf kecil */
btnKecil.addEventListener("click", function () {

    const text = textarea.value;
    hasil.value = text.toLowerCase();

});