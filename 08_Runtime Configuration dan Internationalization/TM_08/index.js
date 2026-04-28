const originalWrite = process.stdout.write.bind(process.stdout);
process.stdout.write = (chunk, ...args) => {
  if (typeof chunk === "string" && chunk.includes("injected env")) return true;
  return originalWrite(chunk, ...args);
};

require("dotenv").config();

const BASE_API = process.env.BASE_API;

async function getKurs() {
  const response = await fetch(BASE_API);
  const data = await response.json();

  const tanggal = new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(data.date));

  const amounts = [25000, 50000, 100000];

  for (const amount of amounts) {
    const cnh = amount * data.idr.cnh;
    const eur = amount * data.idr.eur;

    const rupiah = new Intl.NumberFormat("id-ID").format(amount);

    const cnhFormatted = new Intl.NumberFormat("de-DE", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(cnh);

    const eurFormatted = new Intl.NumberFormat("de-DE", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(eur);

    console.log(
      `Kurs Rp${rupiah} pada ${tanggal} adalah CNH ${cnhFormatted} dan ${eurFormatted} €`
    );
  }
}

getKurs();