// ----------------- script 1 -----------------
let a = 1;
let b = 5;
let temp;

temp = a; // temp vaut 1.
a = b; // a vaut 5.
b = temp; // b vaut 1 à cause de temp qui vaut 1.

console.log("* --------- Script 1 --------- *");
console.log("A:", a, "B:", b);

// ----------------- script 2 -----------------
const mySecondExo = () => {
    let fName = "toto";
    let age = 30;
    let homme = true;

    console.log("* --------- Script 2 --------- *");
    // 
    console.log("Nom : %s , age : %s , homme : %s", fName, age, homme);

    if(homme === true) {
        console.log("Sexe : homme" );
    } else {
        console.log(" ");
    }
}
mySecondExo(); 

// ----------------- script 3 -----------------
const pow = () => {
    // Demande à l'utilisateur de saisir une base
    const base = prompt('Base ?');
    // Demande à l'utilisateur de saisir une puissance
    const exponent = prompt('Puissance voulue ?');

    // Convertit les entrées en nombres
    const baseNumber = parseFloat(base);
    const exponentNumber = parseFloat(exponent);

    // Vérifie si les entrées sont des nombres valides.
    if (!isNaN(baseNumber) && !isNaN(exponentNumber)) {
        // Calcule la puissance
        const result = Math.pow(baseNumber, exponentNumber);
        // Affiche le résultat
        alert(baseNumber + ' à la puissance ' + exponentNumber + ' = ' + result);
    } else {
        // Affiche un message d'erreur si les entrées ne sont pas valides
        alert('Ceci n\'est pas un chiffre valide.');
    }
};

// Appelle la fonction pow pour exécuter le code
pow();

