// Prendo il valore "pari"  o "dispari" dall'utente
// Prendo un numero da 1 a 5 dall'utente
// Genero un numero random
// Sommo i 2 numeri
// Stabilisco se la somma è  pari o dispari
// Se il valore della somma corrisponde a ciò che  ha inserito l'utente, questo ha vinto, altrimenti ha perso

const pariDispari = prompt("Decidi se pari o dispari")
const numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"))
// console.log(pariDispari, numeroUtente)

function getRandomNumber(min, max) {
    const minCeiled = Math.ceil(min)
    const maxFloored = Math.floor(max)

    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)
}

const sommaNumeri = numeroUtente + getRandomNumber(1, 5)
// console.log(numeroComputer, sommaNumeri)

function isEven(num) {
    if (num % 2 === 0) {
        return "pari"
    } else {
        return "dispari"
    }
}

// console.log(isEven(sommaNumeri))

if (pariDispari === isEven(sommaNumeri)) {
    console.log("Hai vinto")
} else {
    console.log("Hai perso")
}


