// Nilai Ujian
let nilaiCoding = 40;
let nilaiInterview = "B";

let hasilCoding;
let hasilInterview;

// Analisis hasil coding
if (nilaiCoding > 80) {
    hasilCoding = "LOLOS";
}   else if (nilaiCoding >= 60 && nilaiCoding <= 80) { 
    hasilCoding = "DIPERTIMBANGKAN";    
}   else {
    hasilCoding = "GAGAL";
}

//Menentukan hasil hasil interview
if (nilaiInterview === "A" || nilaiInterview === "B") {
    hasilInterview = "LOLOS";
} else {
    hasilInterview = "GAGAL";
}

//Menampilkan hasil akhir
console.log("===== HASIL PENILAIAN =====");
console.log(`Nilai Coding: ${nilaiCoding} - ${hasilCoding}`);
console.log(`Nilai Interview: ${nilaiInterview} - ${hasilInterview}`);

if ((hasilCoding === "LOLOS" || hasilCoding === "DIPERTIMBANGKAN") && hasilInterview === "LOLOS") { 
    console.log("Selamat Kamu Berhasil Menjadi Calon Programmer");
} else {
    console.log("Maaf Kamu Belum Berhasil Menjadi Calon Programmer");
}