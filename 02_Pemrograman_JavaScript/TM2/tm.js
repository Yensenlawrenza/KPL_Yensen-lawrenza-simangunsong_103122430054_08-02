function fizzBuzz(data) {

    if (Array.isArray(data) === false) {
        return "Input tidak valid";
    }

    let hasil = [];
    let adaFizzBuzz = false;
    let adaNegatif = false;

    for (let i = 0; i < data.length; i++) {

        let angka = data[i];

        if (angka < 0) {
            adaNegatif = true;
        }

        if (angka % 14 === 0) {
            hasil.push("FizzBuzz");
            adaFizzBuzz = true;
        } 
        else if (angka % 2 === 0) {
            hasil.push("Fizz");
        } 
        else if (angka % 7 === 0) {
            hasil.push("Buzz");
        } 
        else {
            hasil.push(angka);
        }
    }

    let pemisah;

    if (adaFizzBuzz && !adaNegatif) {
        pemisah = " ";
    } else {
        pemisah = ", ";
    }

    return hasil.join(pemisah);
}

module.exports = fizzBuzz;