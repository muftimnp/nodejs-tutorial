const person = {
    firstName: "Mufti",
    lastName: "Prabowo"
}

if ("firstName" in person) {
    document.writeln(`Hello ${person.firstName}`);
} else {
    document.writeln("Hello");
}

/*jadi walaupun nilai property atau index nya 
undefined atau null, maka tetap akan dianggap ada*/

const person2 = {
    fullName: undefined,
    address: null
}

if ("fullName" in person2){
    document.writeln(`<p>Hello ${person2.fullName} </p>`);
} else {
    document.writeln(`<p>Hello</p>`);
}