const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let totalKalori = 0;

console.log("Program Menghitung Kalori yang Terbakar");

function inputAktivitas() {
  console.log("\nPilih jenis olahraga:");
  console.log("1. Lari");
  console.log("2. Push-up");
  console.log("3. Plank");

  rl.question("Masukkan pilihan (1/2/3): ", (jenis) => {
    rl.question("Masukkan lama waktu olahraga (menit): ", (waktu) => {
      waktu = parseFloat(waktu);
      let kalori = 0;

      if (jenis === "1") {
        kalori = (waktu / 5) * 60; // 60 kalori tiap 5 menit
      } else if (jenis === "2") {
        kalori = (waktu / 30) * 200; // 200 kalori tiap 30 menit
      } else if (jenis === "3") {
        kalori = waktu * 5; // 5 kalori tiap menit
      } else {
        console.log("Pilihan tidak valid!");
        return inputAktivitas();
      }

      console.log(`Kalori terbakar dari aktivitas ini: ${kalori} kalori`);
      totalKalori += kalori;

      rl.question("Apakah ingin menambah aktivitas lain? (y/n): ", (lanjut) => {
        if (lanjut.toLowerCase() === "y") {
          inputAktivitas();
        } else {
          console.log(
            `\n🔥 Total kalori terbakar dari semua aktivitas: ${totalKalori} kalori`
          );
          rl.close();
        }
      });
    });
  });
}

inputAktivitas();