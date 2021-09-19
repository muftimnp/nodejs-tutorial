const nilaiUjian = 70;
document.writeln("<p>Cek Inspect</p>");
if (nilaiUjian > 70) {
    console.log("Selamat anda lulus");
} else if (nilaiUjian > 50) {
    console.log("remedial");
} else {
    console.log("Anda tidak lulus");
};

//pop up --- alert, prompt, confirm
const nilaiMu = prompt("Berapa nilai mu = ");
if (nilaiMu > 70) {
    const nameLulus = prompt("Nama anda = ");
    alert(`${nameLulus} Selamat anda lulus dengan nilai memuaskan`);
    console.log(`${nameLulus} Selamat anda lulus dengan nilai memuaskan`);
} else if (nilaiMu > 50) {
    const belajar = confirm("Apakah anda mau remedial ? ");
    if (belajar) {
        const nameRemedial = prompt("Nama anda = ");
        alert(`${nameRemedial} terdaftar untuk remedial`);
        console.log(`${nameRemedial} terdaftar untuk remedial`);
    } else {
        alert(`Jangan pasrah woiii`);
    }
} else {
    alert(`Maaf anda tidak lulus`);
    console.log("Maaf anda tidak lulus");
};