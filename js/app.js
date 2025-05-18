// Creo una funzione in cui viene inserita la parola digitata dall'utente
// SE la parola è palindroma stampo "true"
// ALTRIMENTI stampo "false"

function isPalindrome(string) {
    const parolaReverse = string.split("").reverse().join("")
    if (parolaReverse === string) {
        return true
    } else {
        return false
    }
}

const parola = prompt("Inserisci una parola")
console.log(isPalindrome(parola))

