document.writeln("Inspect element boss");
let arrayKosong = [];
let arrayNama = ["Mufti", "Muhammad", "Nur", "Prabowo"];

const names = [];
names.push("Mufti");
names.push("Muhammad", "Nur");
names.push("Prabowo");
names.push(["test", "nama", "orang"]);
console.log(names);
console.log("array length = " + names.length);
console.log(names.slice(1, 3));

//motong data tanpa menghilangkan indeks (awalIndeks, jumlahYangAkanDihapus)    
names.splice(1, 2);
console.table(names);
console.log("array length = " + names.length);

//replace data di array[i]
names[1] = "tiara";
console.table(names);
console.log("array length = " + names.length);

//delete data dan indeks pada array
delete names[1];
console.table(names);