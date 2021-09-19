const person = {};

//ubah property / attribute
person["nama"] = "Mufti Muhammad";
person["alamat"] = "Indonesia";
person["umur"] = "23";
console.table(person);

//cara delete object
delete person["umur"];
console.table(person);

let namaKu = "Mufti Muhammad";
const player = {
    namaPemain: `${namaKu}`,
    "alamat pemain": "Indonesia", //ini contoh yg tidak baik
    umurPemain: 23
};
console.table(player);

console.info(`Nama : ${player.namaPemain}`);
console.info(`Alamat : ${player["alamat pemain"]}`);
console.info(`Umur : ${player.umurPemain}`);