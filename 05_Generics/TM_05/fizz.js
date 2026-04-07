/**
 * @param {number} num
 * @returns {string|number}
 */
function zzzzOrNum(num) {
    if (!Number.isInteger(num)) {
        throw new Error("Input harus bilangan bulat");
    }

    const kelipatan3 = num % 3 === 0;
    const kelipatan5 = num % 5 === 0;

    if (kelipatan3 && kelipatan5) return "FizzBuzz";
    if (kelipatan3) return "Fizz";
    if (kelipatan5) return "Buzz";

    return num;
}

/**
 * @param {number[]} arr
 * @returns {(string|number)[]}
 */
function fizzBuzz(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("Input harus array");
    }

    return arr.map((item) => {
        if (!Number.isInteger(item)) {
            throw new Error("Semua elemen harus bilangan bulat");
        }
        return zzzzOrNum(item);
    });
}

module.exports = {
    fizzBuzz,
    zzzzOrNum,
};