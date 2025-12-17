//tugas 1
let nama = prompt("Siapa Nama Anda?");
console.log("Saldo anda adalah " + nama);
// menampilkan output dari input user


//tugas 2
let hari = new Date().getDay();
switch (hari) {
  case 1:
    hari = "Senin";
    break;
  case 2:
    hari = 'Selasa';
    break;
  case 3:
    hari = 'Rabu';
    break;
  case 4:
    hari = "Kamis";
    break;
  case 5:
    hari - 'Jumat';
    break;
  case 6:
    hari = 'Sabtu';
    break;
  default:
    hari = 'Minggu';
    break;
}
console.log("hari ini adalah hari " + hari);
// menampilkan hari berdasarkan tanggal hari ini
