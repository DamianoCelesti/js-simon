// selezioniamo elemento

const timer = document.getElementById("countdown");
const form = document.getElementById("answers-form");
const numeri = document.getElementById("numbers-list");
// const messaggio = document.getElementById("message");




// genera numeri


let numeriCasuali = [];
for (let i = 0; i < 5; i++) {
    numeriCasuali.push(Math.floor(Math.random() * 50) + 1);
}

// facciamo apparire i numeri casuali a schermo
numeri.textContent = `${numeriCasuali}`;//numeriCasuali.join(", ");
// console.log(numeriCasuali);

// settiamo i secondi di partenza 

let secondi = 5;

// settiamo set interval

const decremento = setInterval(() => {
    timer.textContent = secondi;
    if (secondi === 0) {
        clearInterval(decremento);
        form.classList.remove("d-none");
        numeri.classList.add("d-none");
    }
    secondi--;
}, 1000);


// intercetto l'evento di invio
form.addEventListener("submit", (event) => {
    //blocco l'invio del form
    event.preventDefault();
    // recupero i valori degli input (nodelist)
    const risposte = document.querySelectorAll("#input-group input");
    const risposteUtente = [];
    

    for (let i = 0; i < risposte.length; i++) {
        
        // aggiungo i numeri dalla nodelist all array e li trasformo in numeri
        risposteUtente.push(parseInt(risposte[i].value));
    }
    console.log("numeri dell'utente", risposteUtente);
    // confronto i numeri indovinati
    const numeriIndovinati = [];  // lista dove mettere i numeri =

    for(let i = 0; i < numeriCasuali.length; i++) {
        // se risposte dell'utente sono incluse nei numeri casuali, mi pushi i numeri nella lista 
        if (risposteUtente.includes(numeriCasuali[i])) {
            numeriIndovinati.push(numeriCasuali[i]);
        }
    }
// seleziono l elemento 
const messaggio = document.getElementById("message");

// imposto il messaggio
const quantitaIndovinati = numeriIndovinati.length; 
const numeriIndovinatiTesto = numeriIndovinati.join(", "); 
messaggio.textContent = `Hai indovinato ${quantitaIndovinati} numeri: ${numeriIndovinatiTesto}`;

messaggio.classList.remove("d-none");

console.log("Numeri generati casualmente:", numeriCasuali);
console.log("Numeri inseriti dall'utente:", risposteUtente);
console.log("Numeri indovinati:", numeriIndovinati);
});

