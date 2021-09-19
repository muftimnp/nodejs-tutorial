let namaku;

if (namaku === undefined) {
    console.info(namaku);
} else {
    console.info(namaku);
}

//undefined array value
const kumpulanNama = ["Mufti", "Muhammad", "Nur", "Prabowo"];
kumpulanNama[2] = undefined;
delete kumpulanNama[3];

if (kumpulanNama[3] === undefined) {
    console.info("isi array kumpulanNama(+) "+ kumpulanNama);
    console.info("isi array kumpulanNama(,) ", kumpulanNama);
} else {
    console.info(kumpulanNama[3]);
}

//undefined object property
let person = {player: "muftroy"};

if (person.name === undefined) {
    console.info("isi object person(+) =  " + person);
    console.info("isi object person(,) =  ", person);
    console.info(person);
    console.info(person.player);
    console.info("OBJECT UNDEFINED ", person.name); //contoh undefined
} else {
    console.info(person);
}

//contoh null
let firstName = null;
if (firstName  === undefined) {
    alert("UNDEFINED");
} else if (firstName === null) {
    alert("NULL");
} else {
    alert(firstName);
}