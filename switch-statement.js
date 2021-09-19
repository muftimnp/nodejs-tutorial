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