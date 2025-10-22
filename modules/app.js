const math = require('./modules/math');
const welcome = require('./modules/welcome');
const tanggal = require('./modules/tanggal');
const convert = require('./modules/convert');

// Menggunakan modul-modul yang telah dibuat
console.log('=== Aplikasi Modular Node.js ===\n');

console.log(welcome.sayHello('Syahrul Mubarok'));
console.log(`Hari ini adalah: ${tanggal.getToday()}\n`);

console.log('Operasi Matematika:');
console.log(`hasil dari 5 + 3 = ${math.tambah(5, 3)}`);
console.log(`hasil dari 10 - 4 = ${math.kurang(10, 4)}`);
console.log(`hasil dari 6 * 7 = ${math.kali(6, 7)}`);
console.log(`hasil dari 20 / 5 = ${math.bagi(20, 5)}\n`);

console.log('Konversi Satuan:');
console.log(`25°C = ${convert.celciusToFahrenheit(25)}°F`);
console.log(`3 Kilometer = ${convert.kilometersToMeters(3)} Meter`);