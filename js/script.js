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
    if(secondi === 0){
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
    const risposte = document.querySelectorAll("#input-group input");
    

    for (let i = 0; i < risposte.length; i++) {
        console.log("Numeri dell'utente", risposte[i].value);
    }
    
});
