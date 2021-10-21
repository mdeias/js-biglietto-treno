
// definisco le variabili da chiedere all'utente (km, età)
// definisco variabile prezzo 
// inserisco sconti 
// stampo il prezzo

const km = prompt( "Quanti km vuoi percorrere?");
const anni = prompt( "Quanti anni hai?");

let prezzo = (0.21 * km);

const sconto18 = (0.042 * km);
const sconto65 = (0.084 * km);

console.log(prezzo);

if (anni < 18){

    console.log(prezzo - sconto18);
}

if (anni > 65){

    console.log(prezzo - sconto65);
}