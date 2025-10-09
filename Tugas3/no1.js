//Data orang yang akan dianalisis
let nama = "John Doe";
let umur = 20;
let tempatTinggal = "detroit";
let tabungan = 500000;
let pangkat = "";

//Analisis berdasarkan kriteria
if (umur > 40 && ["nevada", "new york", "havana"].includes(tempatTinggal) && tabungan > 10000000) {
  pangkat = "Don";
} else if (umur >= 25 && umur <= 40 && ["new jersey", "manhattan", "nevada"].includes(tempatTinggal) && tabungan >= 1000000 && tabungan <= 2000000) {
  pangkat = "Underboss";
} else if (umur >= 18 && umur <= 24 && ["california", "detroit", "boston"].includes(tempatTinggal) && tabungan < 1000000) {
  pangkat = "Capo";
}

// Output hasil analisis
if (pangkat) {
  console.log(`${nama} kemungkinan adalah seorang anggota mafia dengan pangkat ${pangkat}.`);
} else {
  console.log(`${nama} tidak mencurigakan.`);
}