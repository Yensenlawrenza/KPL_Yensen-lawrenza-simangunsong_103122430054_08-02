import { kuadrat, pangkat, bulat } from "mtk-gampang";

const narasi = `Seorang insinyur menetapkan luas panel ${bulat(kuadrat(12))} meter persegi, lalu menggunakan kapasitas penyimpanan sebesar ${pangkat(2, 10)} watt-jam.`;

console.log(narasi);

/**
 * Output:
 * Seorang insinyur menetapkan luas panel 3 meter persegi,
 * lalu menggunakan kapasitas penyimpanan sebesar 1024 watt-jam.
 */