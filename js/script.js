/*
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
*Prima di partire a scrivere codice poniamoci qualche domanda:*
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare?

*Consigli del giorno:*
1. Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

*BONUS 1:*
Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.

*BONUS 2:*
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.
*/

/*
tmplate: 
    <div id="boxes" class="d-flex justify-content-center align-content-center gap-3">
        <div class="box"></div>
    </div>
*/


// creo elemento div all'interno del documento html e lo associo a una costante.
const squareWrapper = document.createElement('div');

// associo a squarewrapper le seguenti classi scritte nelle ''.
squareWrapper.className = 'd-flex justify-content-center align-content-center gap-3';

// associo un attributo preso per id a squarewrapper.
squareWrapper.setAttribute('id', 'boxes');

let numBoxes = 100;

// creo ed associo le variabili agli id creati su html
let elfizz = document.getElementById('Fizz');
let elbuzz = document.getElementById('Buzz');
let elfizzbuzz = document.getElementById('FizzBuzz');
console.log(typeof elfizz, typeof elbuzz, typeof elfizzbuzz);

for (let i = 1; i <= 100; i++) {
    if (i % 15 == 0) {

        console.log("FizzBuzz");
    }
    else if (i % 3 == 0) {

        console.log("Fizz");
    }
    else if (i % 5 == 0) {

        console.log("Buzz");
    }
    else console.log(i);
}


