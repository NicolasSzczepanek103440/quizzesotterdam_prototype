// Hier staan alle functies voor de leaderboard.
// P.S. JavaScript telt in plaats van 1 naar 10 van 0 naar 9, dus de naam 'rank0' is gekozen voor de eerste naam vanwege hoe Javascript werkt (en eigenlijk ook hoe deze script werkt).

// * Deze waardes (wat ik graag 'terugkomwaardes' noem) wordt gebruikt om de rankpositie van de namen te veranderen
if (sessionStorage.visitcount_gymfitness == undefined) { 
    sessionStorage.visitcount = 0;
}

if (sessionStorage.visitcount_gamers == undefined) {
    sessionStorage.visitcount = 0;
}

// * Bij activatie van deze functie wordt gevraagd of de gebruiker zijn eindscore in de leaderboard wilt zetten
function vraag() {
        let count = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; // Wordt gebruikt om een deel van de onderstaande code te helpen
        
        // Vraag
        let antwoord = window.prompt("Wil je jouw score in de leaderboard zetten? (ja/nee)");
        antwoord.toLowerCase();
        
        // Hier wordt gecheckt of de gebruiker ja of nee heeft geantwoord
        if (antwoord == "ja") {

            // Hier wordt gecheckt in welke rankvakken van welk quiz de naam komt te staan
            if (sessionStorage.soortquiz == "quiz_gymfitness") {
                for (let counter in count) {
                    if (counter == sessionStorage.questionsright) {
                        let gymfitness_insertnaam = document.getElementById(`rank_quizgymfitness${counter}`);
                        gymfitness_insertnaam.innerText = sessionStorage.naam;
                    }
                }


                }
            }

            if (sessionStorage.soortquiz == "quiz_gamers") {
                for (let counter in count) {
                    if (counter == sessionStorage.questionsright) {
                        let gymfitness_insertnaam = document.getElementById(`rank_quizgamers${counter}`);
                        gymfitness_insertnaam.innerText = sessionStorage.naam;
                    }
                }


                }

                // Hier wordt gecheckt of de gebruiker iets anders heeft ingevuld dan ja of nee
                if (antwoord != "ja" && antwoord != "nee") {
                    vraag();
                }
            }

        
// Op activatie wordt de gebruiker teruggebracht naar de hoofdpagina.
function hoofdpagina() {
    sessionStorage.countpagina = 0;
    sessionStorage.questionsright = 0;
    sessionStorage.soortquiz = ""
    sessionStorage.naam = "";
    window.location = '../hoofdpagina/index.html';
}