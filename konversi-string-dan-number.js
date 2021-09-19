const value1 = "1.8";
const value2 = 1.8;
const value3 = parseInt("1.8");
const value4 = parseFloat("1.8");
const value5 = Number("1.8");
const notAnumber = "A";
const sum = value1 + value2;

//Jika konversi string huruf dengan parse int atau float mampu menolerir jika string ada dibelakang
//Tapi jika konversi string huruf dengan number akan selalu menjadi NaN
console.log(`<p> value1 + value2 = ${sum}</p>`);
console.log(`<p>value3(stringAngka ke int) = ${value3}</p>`);
console.log(`<p>value4(stringAngka ke float) = ${value4}</p>`);
console.log(`<p>value5(stringAngka ke number) = ${value5}</p>`);
console.log(`<p>notAnumber(stringHuruf ke number) = ${Number(notAnumber)}</p>`);
console.log(`<p>value3 + value4 = ${value3 + value4}</p>`);
console.log(`<p>value5 + notAnumber = ${value5 + Number(notAnumber)}</p>`);
console.log(`<p>cek apakah NaN = ${isNaN(Number(notAnumber))}</p>`);