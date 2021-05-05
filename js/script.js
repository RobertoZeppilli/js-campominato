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

// funzione per generare un numero random tra un range di numeri stabiliti
function numeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// funzione per controllare se un dato sia presente o meno in un array
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
var numeroRandomMassimo = 100;
var tentativiMassimi = numeroRandomMassimo - 16;


// SCELTA DIFFICOLTA'-------------------------------
var bomba;
var scelta = parseInt(prompt("Scegli una difficoltà:\n0 - 1 - 2"));

switch (scelta) {
    case 0:
        numeroRandomMassimo = 100;
        console.log("Hai scelto la difficoltà:", scelta);
        break;

    case 1:
        numeroRandomMassimo = 80;
        console.log("Hai scelto la difficoltà:", scelta);
        break;

    case 2:
        numeroRandomMassimo = 50;
        console.log("Hai scelto la difficoltà:", scelta);
        break;

    // in caso la scelta non sia compresa tra i numeri indicati, richiedere
    default: do {
        scelta = parseInt(prompt("Devi scegliere tra una di queste difficoltà:\n0 - 1 - 2"));
    } while (scelta != 0 && scelta != 1 && scelta != 2);

}


// CREAZIONE BOMBE-----------------------------------
while (bombe.length < 16) {

    bomba = numeroRandom(1, numeroRandomMassimo);
    if (!presenteInArray(bomba, bombe)) {
        bombe.push(bomba);
    }
}

// GIOCO -------------------------------------------
var gameOver = false;
while (tentativi.length < tentativiMassimi && gameOver == false) {

    // richiesta all'utente con limitazioni sul range e sul tipo di dato
    do {
        var sceltaNumero = parseInt(prompt("Inserisci un numero compreso tra 1 e 100"));
        // console.log(sceltaNumero);

    } while (isNaN(sceltaNumero) || sceltaNumero < 1 || sceltaNumero > 100);

    // sconfitta
    if (presenteInArray(sceltaNumero, bombe)) {
        gameOver = true;
        alert("Hai perso, il tuo punteggio è: " + tentativi.length);

        // in caso il numero scelto dall'utente non sia una bomba, push nell'array tentativi per non riusare quel numero di nuovo
    } else if (!presenteInArray(sceltaNumero, tentativi)) {
        tentativi.push(sceltaNumero);
    }
    console.log("Tentativo N°:", tentativi.length, "Numero scelto:", sceltaNumero);
}

// ALERT VITTORIA -----------------------------------
if (tentativi.length == tentativiMassimi) {
    alert("Complimenti! Il tuo punteggio è: " + tentativi.length);
}

