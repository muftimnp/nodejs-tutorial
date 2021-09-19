const nilaiUjian = 90;
const nilaiAbsensi = 70;

const lulusUjian = nilaiUjian > 75;
const lulusAbsensi = nilaiAbsensi > 75;

const lulus = lulusUjian && lulusAbsensi;
document.writeln("<p> lulus = " + lulus + "</p>");
document.writeln(`<p> lulus = ${lulus} </p>`);

const ujianKhusus = lulusUjian || lulusAbsensi;
document.writeln("remedial = " + ujianKhusus);