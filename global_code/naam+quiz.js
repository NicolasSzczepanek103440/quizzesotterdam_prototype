// Binnen dit bestand vindt u de code dat naar de quizpagina leidt en de naam van de gebruiker aanmaakt.

let naam = undefined; // De naam van de gebruiker
let getquery = undefined; // Welke get query waarde er gestuurd wordt naar de quizpagina voor de quiznaam

function naarpagina(pagina) {
    naam = window.prompt("Maak een naam voor de quiz");

    // Bepalen welk get waarde de pagina krijgt. Dit is om te testen.
    if (pagina == 'gamerspage'){
        getquery = "quiz_gamers";
    }

    else {
        getquery = "quiz_gymfitness"
    }
    
    // Doorsturen naar andere pagina, naam valideren
    if (naam == "" || naam == undefined) {
        window.location = `/${pagina}/index.html`;
        naam = undefined;
    }
    else {
        window.location = `/quizvraag/index.html?${getquery}`;
    }
}