// Binnen dit bestand vindt u de code dat naar de quizpagina leidt, de gebruiker terug naar de vorige pagina stuurt en de gebruikersnaam voor de gebruiker aanmaakt.

let goback; // naar welke pagina de gebruiker wordt teruggestuurd (bijv. als naamvalidatie verkeerd gaat) + naar welke pagina de gebruiker wordt gestuurd

if (sessionStorage.naam == undefined) {
    sessionStorage.naam = "";
}

function quizpagina(pagina) {
    // * bepalen van welk pagina de gebruiker vandaan komt en wordt teruggestuurd (zodra dingen verkeerd gaan, bijvoorbeeld de naamvalidatie)

    // Code wordt opgezet om terug naar de gym/fitness-infopagina te gaan
    if (window.location == 'http://127.0.0.1:5500/quizzesotterdam_prototype-main/gymfitness/index.html') {
        goback = 'gymfitness'; 
    }

    // Code wordt opgezet om terug naar de gamers-infopagina te gaan
    if (window.location == 'http://127.0.0.1:5500/quizzesotterdam_prototype-main/gamerspage/index.html') {
        goback = 'gamerspage'; 
    }

    // * vragen om de gebruikersnaam en doorlaten naar quiz + gebruikersnaam valideren

    // vragen om gebruikersnaam
    sessionStorage.naam = window.prompt("Wat is uw naam?"); 
    
    // gebruikersnaam valideren en terugsturen naar vorige pagina zodra dingen misgingen
    if (sessionStorage.naam == "" || sessionStorage.naam == undefined) {
        // gebruiker terugbrengen naar pagina waar zij vandaan kwamen
        window.location = `../${goback}/index.html`
    }

    // * gebruiker doorsturen naar quiz
    // * BELANGRIJK: Beide quizzen delen dezelfde pagina's. De meeste werk wordt door de backend gedaan.
    else {
        
        // doorsturen naar gym/fitness quiz
        if (goback == "gymfitness") {
            window.location = `../quizvraag/index.html?quiz=gymfitness`;
        }

        // doorsturen naar gamers quiz
        if (goback == "gamerspage"){
            window.location = `../quizvraag/index.html?quiz=gamers`;
        }
    }
}

























/* function quizpagina() {
    let titel = document.getElementById("titel");
    let naamdatabase = document.querySelector(".naamdatabase");
    
    if (window.location == "http://127.0.0.1:5500/quizzesotterdam_prototype-main/quizvraag/index.html?quiz=quiz_gymfitness") {
        goback = "gymfitness"
        titel.innerText = "Gymfitness Quiz";
    }

    else {
        goback = "gamerspage"
        // titel.innerText = "Gamers Quiz";
    }
    
     sessionStorage.naam = window.prompt("test naam invul"); // Invulling naam database

    
    
    // Doorsturen naar andere pagina, naam valideren
    if (sessionStorage.naam == "" || sessionStorage.naam == undefined) {
        window.location = `../${goback}/index.html`;
        sessionStorage.naam = undefined;
    }
    else {
        console.log(sessionStorage.naam);
        // naamdatabase.innerText = sessionStorage.naam;
        window.location = "http://127.0.0.1:5500/quizzesotterdam_prototype-main/quizvraag/index.html?quiz=quiz_gymfitness";
    }
} */ // Oud script