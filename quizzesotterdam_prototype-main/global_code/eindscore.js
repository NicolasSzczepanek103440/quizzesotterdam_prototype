// In deze pagina staan de eindscore functies.

let naam = document.getElementById("titel2");
let score = document.getElementById("titel3");

let eindscore_pic = document.getElementById("picin"); // De foto op de eindscorepagina
eindscore_pic.src = "../images/placeholderplaatje.webp"

// * Hier wordt de plaatje op de eindscorepagina bepaalt afhankelijk van de eindscore
// P.S.: Deze plaatjes zijn alleen placeholderplaatjes. Deze komen niet in het eindproduct te staan.

if (sessionStorage.questionsright <= 5) {
    eindscore_pic.src = "../images/eindscore_1-5.png";
}

if (sessionStorage.questionsright >= 6 && sessionStorage.questionsright < 7) {
    eindscore_pic.src = "../images/eindscore_5.5-6.png";
}

if (sessionStorage.questionsright >= 7 && sessionStorage.questionsright < 10) {
    eindscore_pic.src = "../images/eindscore_7-9.png";
}

if (sessionStorage.questionsright == 10) {
    eindscore_pic.src = "../images/eindscore_10.png";
}

// * Hier wordt de naam en score op de pagina weergegeven
naam.innerText = `${sessionStorage.naam}`; // Naam wordt weergegeven
score.innerText = `${sessionStorage.questionsright}/10 vragen goed` // Score wordt weergegeven (hoeveel van de 10 vragen de gebruiker goed heeft)

// * Zodra deze functie geactiveerd wordt, wordt de gebruiker naar de leaderboardpagina gestuurd
function leaderboard() {
    if (sessionStorage.soortquiz == "quiz_gymfitness") {
        window.location = "../leaderboard/index.html?quiz=gymfitness";
    }

    if (sessionStorage.soortquiz == "quiz_gamers") {
        window.location = "../leaderboard/index.html?quiz=gamers";
    }
}

// * Deze functie brengt de gebruiker terug naar de homepage
function terughomepagina() {
    sessionStorage.countpagina = 0;
    sessionStorage.questionsright = 0;
    sessionStorage.soortquiz = ""
    sessionStorage.naam = "";
    window.location = '../hoofdpagina/index.html';
}
