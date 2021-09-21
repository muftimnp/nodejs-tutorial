let nilai = "B";

switch (nilai) {
    case "A":
        document.writeln("<p>Wow Anda lulus dengan baik</p>");
        break;
    case "B":
    case "C":
        document.writeln("<p>Anda lulus</p>");
        break;
    case "D":
        document.writeln("<p>Anda tidak lulus</p>");
        break;
    default:
        document.writeln("<p>Mungkin Anda salah jurusan</p>")
}

const nilaiMu = prompt("Berapa nilai mu = ");
switch (true) {
    case (nilaiMu>80):
        document.writeln("<p>Wow Anda lulus dengan baik</p>");
        break;
    case (nilaiMu>70):
    case (nilaiMu>60):
        document.writeln("<p>Anda lulus</p>");
        break;
    case (nilaiMu>50):
        document.writeln("<p>Anda tidak lulus</p>");
        break;
    default:
        document.writeln("<p>Mungkin Anda salah jurusan</p>")
}