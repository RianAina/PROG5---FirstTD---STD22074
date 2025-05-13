
const ingredientsDisponibles = ["riz", "poulet", "oignon", "tomate", "huile", "sel", "poivre"];


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


let ingredientsUtilisateur = [];

function demanderIngredient(index) {
    if (index >= ingredientsDisponibles.length) {
        readline.close();
        preparerPlat();
        return;
    }

    const ingredient = ingredientsDisponibles[index];
    readline.question(`As-tu du ${ingredient} ? (oui/non) `, (reponse) => {
        if (reponse.toLowerCase() === 'oui') {
            ingredientsUtilisateur.push(ingredient);
        }
        demanderIngredient(index + 1);
    });
}

function preparerPlat() {
    console.log("\nPréparation du plat avec les ingrédients suivants :", ingredientsUtilisateur.join(", "));

    if (ingredientsUtilisateur.includes("riz") && ingredientsUtilisateur.includes("poulet")) {
        console.log("=> Tu peux préparer un délicieux riz au poulet !");
    } else if (ingredientsUtilisateur.includes("tomate") && ingredientsUtilisateur.includes("oignon")) {
        console.log("=> Tu peux faire une bonne sauce tomate !");
    } else {
        console.log("=> Pas assez d'ingrédients pour un plat complet, mais tu peux improviser !");
    }
}


console.log("Bienvenue dans Fatana - ton assistant cuisine !");
demanderIngredient(0);
