// In dit bestand staan de quizoverzichtsfuncties.
let titel = document.getElementById("titel");
let naam_in_overzichtspagina = document.getElementById("titel2");
let vragengoed = document.getElementById("titel3");

// * De quizoverzichtsfuncties worden geactiveerd
function quizoverzicht() {
    window.alert(sessionStorage.questionsright);
    window.alert(sessionStorage.countpagina);

    // * Controleert welke quiz het is
    if (window.location == "http://127.0.0.1:5500/quizzesotterdam_prototype-main/quizoverzicht/index.html?quiz_gymfitness") {
        titel.innerText = "Gym/fitness quiz overzicht";
    }

    if (window.location == "http://127.0.0.1:5500/quizzesotterdam_prototype-main/quizoverzicht/index.html?quiz_gymfitness") {
        titel.innerText = "Gym/fitness quizoverzicht";
        vragengoed.innerText = `${sessionStorage.questionsright}/10 vragen goed`
    }

    // *Weergeeft de naam op de pagina
    naam_in_overzichtspagina.innerText = sessionStorage.naam;
}

// * Gebruiker wordt teruggestuurd naar quizpagina
function quizpagina() {
    if (sessionStorage.soortquiz == "quiz_gymfitness") { // Gebruiker wordt teruggestuurd naar gym/fitness quizpagina
        // * Checkt op einde quiz, gebruiker wordt in zulke gevallen naar eindscore gebracht
        if (sessionStorage.countpagina >= 9) { // VERDERWERKEN
                window.alert("bleegh!!");
                window.location = "../eindscore/index.html?quiz=gymfitness";
            }
        }
        
        sessionStorage.countpagina++;
        window.location = '../quizvraag/index.html?quiz=gymfitness';

        

    if (sessionStorage.soortquiz == "quiz_gamers") { // Gebruiker wordt teruggestuurd naar gamersquizpagina
        sessionStorage.countpagina++;
        window.location = '../quizvraag/index.html?quiz=gamers';

        // * Checkt op einde quiz, gebruiker wordt in zulke gevallen naar eindscore gebracht
        if (sessionStorage.countpagina == 9) {
                window.location = "../eindscore/index.html?quiz=gamers";
            }
        }
    }

// * Quiz wordt gestopt
function stopquiz() {
    sessionStorage.countpagina = 0;
    sessionStorage.questionsright = 0;
    sessionStorage.soortquiz = ""
    sessionStorage.naam = "";
    window.location = '../hoofdpagina/index.html';
}

