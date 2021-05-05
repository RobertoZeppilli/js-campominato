// Consegna
// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L'utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all'utente un altro numero.
// La partita termina quando il giocatore inserisce un numero "vietato" o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito.

// BONUS: (da fare solo se funziona tutto il resto)
// all'inizio il software richiede anche una difficoltà all'utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50

// FUNZIONI -----------------------------------
function numeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function presenteInArray(numero, array) {
    for (var i = 0; i < array.length; i++) {

        if (numero == array[i]) {
            return true;
        }
    }
    return false;
}

// VARIABILI ------------------------------------
var bombe = [];
var tentativi = [];
var tentativiMassimi = 84;

// CREAZIONE BOMBE ------------------------------
// while (bombe.length < 16) {

//     var bomba = numeroRandom(1, 100);
//     if (!presenteInArray(bomba, bombe)) {
//         bombe.push(bomba);
//     }
// }
// console.log(bombe);

// SCELTA DIFFICOLTA' CON CREAZIONE BOMBE A SECONDA DEL CASO SCELTO-----------------------------
var scelta = prompt("Scegli una difficoltà:\n0 - 1 - 2");

switch (scelta) {
    case "0":
        while (bombe.length < 16) {

            var bomba = numeroRandom(1, 100);
            if (!presenteInArray(bomba, bombe)) {
                bombe.push(bomba);
            }
        }
        console.log(bombe);
        break;

    case "1":
        while (bombe.length < 16) {

            var bomba = numeroRandom(1, 80);
            if (!presenteInArray(bomba, bombe)) {
                bombe.push(bomba);
            }
        }
        console.log(bombe);
        break;

    case "2":
        while (bombe.length < 16) {

            var bomba = numeroRandom(1, 50);
            if (!presenteInArray(bomba, bombe)) {
                bombe.push(bomba);
            }
        }
        console.log(bombe);
        break;

    default: do {
        scelta = prompt("Scegli una difficoltà:\n0 - 1 - 2");
    } while (scelta != "0" && scelta != "1" && scelta != "2");

}


// GIOCO ---------------------------------------
var gameOver = false;
while (tentativi.length < tentativiMassimi && gameOver == false) {

    do {
        var sceltaNumero = parseInt(prompt("Inserisci un numero compreso tra 1 e 100"));
        console.log(sceltaNumero);
    } while (isNaN(sceltaNumero) || sceltaNumero < 1 || sceltaNumero > 100);

    if (presenteInArray(sceltaNumero, bombe)) {
        gameOver = true;
        alert("Hai perso, il tuo punteggio è: " + tentativi.length);

    } else if (!presenteInArray(sceltaNumero, tentativi)) {
        tentativi.push(sceltaNumero);
    }
}
console.log("Il gioco è terminato! Il tuo punteggio è:", tentativi.length);


