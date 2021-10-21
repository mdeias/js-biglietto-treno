
// definisco le variabili da chiedere all'utente (km, età)
// definisco variabile prezzo 
// inserisco sconti 
// stampo il prezzo

const km = prompt( "Quanti km vuoi percorrere?");
const anni = prompt( "Quanti anni hai?");

let prezzo = (0.21 * km).toFixed(2);

const sconto18 = (0.042 * km);
const sconto65 = (0.084 * km);

const prezzo18 = (prezzo - sconto18).toFixed(2);
const prezzo65 = (prezzo - sconto65).toFixed(2);

console.log(prezzo);
document.getElementById ("costo").innerHTML = (prezzo) + "€";

if (anni < 18){

    console.log(prezzo18);
    document.getElementById ("costo").innerHTML = (prezzo18) + "€";
}

if (anni > 65){

    console.log(prezzo65);
    document.getElementById ("costo").innerHTML = (prezzo65) + "€";
}



