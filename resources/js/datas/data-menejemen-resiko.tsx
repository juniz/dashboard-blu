import { da } from "date-fns/locale";

const dataManajemenResiko = [
  {
    no: "R4",
    kategori: "Operasional (Non Klinis)",
    pertanyaan:
      "Karena tempat penyimpanan elektrolit pekat belum dibatasi lokasinya mungkin saja terjadi kesalahan dalam pengambilan elektrolit pekat Sehingga bisa membahayakan pasien",
    masalah: "Belum ada batas lokasi tempat penyimpanan elektrolit pekat",
    dampak: 5,
    probabilitas: 5,
    controllability: 4,
    scoring: 100,
    rangking: 1,
    color: "red",
    jumlah: 3,
  },
  {
    no: "R1",
    kategori: "Ops- Risiko Klinis",
    pertanyaan:
      "Karena penggunaan APD yang kurang tepat Kemungkinan bisa terkena paparan terhadap darah/cairan yang mengandung virus, hepatitis, HIV, dll Sehingga meningkatkan penularan penyakit dari pasien ke tenaga kesehatan",
    masalah: "belum ada standart APD khusus untuk tiap penyakit berbeda",
    dampak: 5,
    probabilitas: 5,
    controllability: 4,
    scoring: 100,
    rangking: 2,
    color: "red",
    jumlah: 3,
  },
  {
    no: "R2",
    kategori: "Operasional (Non Klinis)",
    pertanyaan:
      "Karena belum semua resep/instruksi pengobatan sesuai kebijakan RS mungkin saja terjadi kesalahan saat memberikan obat ke pasien sehingga bisa terjadi efek samping obat pada pasien",
    masalah:
      "masih ada sebagian penulisan resep / instruksi pengobatan yang masih kurang tepat",
    dampak: 5,
    probabilitas: 4,
    controllability: 4,
    scoring: 80,
    rangking: 1,
    color: "red",
    jumlah: 1,
  },
  {
    no: "R5",
    kategori: "Ops- Risiko Klinis",
    pertanyaan:
      "Karena ruang kamar operasi khusus pasien Covid-19 belum tersedia Kemungkinan Alur pasien Covid-19 masih sama dengan alur pasien non Covid-19 Sehingga meningkatkan penularan penyakit Covid-19",
    masalah: "Belum ada ruang kamar operasi khusus pasien Covid-19",
    dampak: 5,
    probabilitas: 5,
    controllability: 3,
    scoring: 75,
    rangking: 4,
    color: "red",
    jumlah: 3,
  },
  {
    no: "R3",
    kategori: "Operasional (Non Klinis)",
    pertanyaan:
      "karena panel Koneksi  termonitoring mungkin saja koneksi server internet dan intranet tidak selalu berjalan lancar sehingga penggunaan akses SIM RS tidak selalu berjalan lancar",
    masalah:
      "belum ada koneksi server internet dan intranet yang selalu lancar",
    dampak: 4,
    probabilitas: 4,
    controllability: 4,
    scoring: 64,
    rangking: 5,
    color: "red",
    jumlah: 1,
  },
];

export default dataManajemenResiko;
