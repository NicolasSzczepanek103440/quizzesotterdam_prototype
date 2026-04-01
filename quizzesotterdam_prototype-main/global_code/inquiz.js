// In deze pagina staan de quizfuncties (excl. de naamdatabase.)

if (sessionStorage.countpagina == undefined) { // Maakt een vraaglijst om te zien op welke vraag de gebruiker is
    sessionStorage.countpagina = Number();
    sessionStorage.countpagina = 0;
}
if (sessionStorage.questionsright == undefined) { // Maakt een tel van hoeveel vragen er goed zijn beantwoord
    sessionStorage.questionsright = Number();
    sessionStorage.questionsright = 0;
}

if (sessionStorage.soortquiz == undefined) { // Maakt een variabele om te bepalen welk soort quiz de gebruiker wilt maken
    sessionStorage.soortquiz = "";
}

// Antwoordknoppenlijst, wordt gebruikt om te kijken welke antwoord er werd gekozen
let antwoord1 = document.getElementById("antwoord1");
let antwoord2 = document.getElementById("antwoord2");
let antwoord3 = document.getElementById("antwoord3");
let antwoord4 = document.getElementById("antwoord4");

// * Bepaalt welke quiz het is
if (window.location == "http://127.0.0.1:5500/quizzesotterdam_prototype-main/quizvraag/index.html?quiz=gymfitness") { // Hier wordt bepaald dat de gebruiker de gym/fitness quiz doet
    sessionStorage.soortquiz = "quiz_gymfitness";
    activateQuizGymfitness(); // Activatie gym/fitness quiz
}

if (window.location == "http://127.0.0.1:5500/quizzesotterdam_prototype-main/quizvraag/index.html?quiz=gamers") { // Hier wordt bepaald dat de gebruiker de gamersquiz doet
    sessionStorage.soortquiz = "quiz_gamers";
    titel.innerText = "Vraag 1";
    activateQuizGamers(); // Activatie gamersquiz
}

// * Activatie gym/fitness quiz
function activateQuizGymfitness() {
    let titel = document.getElementById("titel");
    let vraag = document.getElementById("titel2");
    window.alert(sessionStorage.questionsright);
    window.alert(sessionStorage.countpagina);

    titel.innerText = "Gym/fitness quiz";

    // Vraag 1 t/m 10
    if (sessionStorage.countpagina == 0) {
        vraag.innerText = "Vraag 1";

        // Welke antwoorden goed zijn (antwoord 1)
        antwoord1.setAttribute("onclick", "overzichtsPagina('goed')");
        antwoord2.setAttribute("onclick", "overzichtsPagina('')");
        antwoord3.setAttribute("onclick", "overzichtsPagina('')");
        antwoord4.setAttribute("onclick", "overzichtsPagina('')");
    }
    if (sessionStorage.countpagina == 1) {
        vraag.innerText = "Vraag 2";

        // Welke antwoorden goed zijn (antwoord 4)
        antwoord1.setAttribute("onclick", "overzichtsPagina('')");
        antwoord2.setAttribute("onclick", "overzichtsPagina('')");
        antwoord3.setAttribute("onclick", "overzichtsPagina('')");
        antwoord4.setAttribute("onclick", "overzichtsPagina('goed')");
    }
    if (sessionStorage.countpagina == 2) {
        vraag.innerText = "Vraag 3";

        // Welke antwoorden goed zijn (antwoord 2)
        antwoord1.setAttribute("onclick", "overzichtsPagina('')");
        antwoord2.setAttribute("onclick", "overzichtsPagina('goed')");
        antwoord3.setAttribute("onclick", "overzichtsPagina('')");
        antwoord4.setAttribute("onclick", "overzichtsPagina('')");
    }
    if (sessionStorage.countpagina == 3) {
        vraag.innerText = "Vraag 4";

        // Welke antwoorden goed zijn (antwoord 1)
        antwoord1.setAttribute("onclick", "overzichtsPagina('goed')");
        antwoord2.setAttribute("onclick", "overzichtsPagina('')");
        antwoord3.setAttribute("onclick", "overzichtsPagina('')");
        antwoord4.setAttribute("onclick", "overzichtsPagina('')");
    }
    if (sessionStorage.countpagina == 4) {
        vraag.innerText = "Vraag 5";

        // Welke antwoorden goed zijn (antwoord 1)
        antwoord1.setAttribute("onclick", "overzichtsPagina('goed')");
        antwoord2.setAttribute("onclick", "overzichtsPagina('')");
        antwoord3.setAttribute("onclick", "overzichtsPagina('')");
        antwoord4.setAttribute("onclick", "overzichtsPagina('')");
    }
    if (sessionStorage.countpagina == 5) {
        vraag.innerText = "Vraag 6";

        // Welke antwoorden goed zijn (antwoord 3)
        antwoord1.setAttribute("onclick", "overzichtsPagina('')");
        antwoord2.setAttribute("onclick", "overzichtsPagina('')");
        antwoord3.setAttribute("onclick", "overzichtsPagina('goed')");
        antwoord4.setAttribute("onclick", "overzichtsPagina('')");
    }
    if (sessionStorage.countpagina == 6) {
        vraag.innerText = "Vraag 7";

        // Welke antwoorden goed zijn (antwoord 4)
        antwoord1.setAttribute("onclick", "overzichtsPagina('')");
        antwoord2.setAttribute("onclick", "overzichtsPagina('')");
        antwoord3.setAttribute("onclick", "overzichtsPagina('')");
        antwoord4.setAttribute("onclick", "overzichtsPagina('goed')");
    }
    if (sessionStorage.countpagina == 7) {
        vraag.innerText = "Vraag 8";

        // Welke antwoorden goed zijn (antwoord 4)
        antwoord1.setAttribute("onclick", "overzichtsPagina('')");
        antwoord2.setAttribute("onclick", "overzichtsPagina('')");
        antwoord3.setAttribute("onclick", "overzichtsPagina('')");
        antwoord4.setAttribute("onclick", "overzichtsPagina('goed')");
    }
    if (sessionStorage.countpagina == 8) {
        vraag.innerText = "Vraag 9";

        // Welke antwoorden goed zijn (antwoord 4)
        antwoord1.setAttribute("onclick", "overzichtsPagina('')");
        antwoord2.setAttribute("onclick", "overzichtsPagina('')");
        antwoord3.setAttribute("onclick", "overzichtsPagina('')");
        antwoord4.setAttribute("onclick", "overzichtsPagina('goed')");
    }
    if (sessionStorage.countpagina == 9) {
        vraag.innerText = "Vraag 10";

        // Welke antwoorden goed zijn (antwoord 4)
        antwoord1.setAttribute("onclick", "overzichtsPagina('')");
        antwoord2.setAttribute("onclick", "overzichtsPagina('')");
        antwoord3.setAttribute("onclick", "overzichtsPagina('')");
        antwoord4.setAttribute("onclick", "overzichtsPagina('goed')");
    }
}

// * Activatie gamers quiz
function activateQuizGamers() {
    let titel = document.getElementById("titel");
    let vraag = document.getElementById("titel2");
    window.alert(sessionStorage.questionsright);
    window.alert(sessionStorage.countpagina);

    titel.innerText = "Gamers quiz";

    // Vraag 1 t/m 10
    if (sessionStorage.countpagina == 0) {
        vraag.innerText = "Vraag 1";

        // Welke antwoorden goed zijn (antwoord 3)
        antwoord1.setAttribute("onclick", "overzichtsPagina('')");
        antwoord2.setAttribute("onclick", "overzichtsPagina('')");
        antwoord3.setAttribute("onclick", "overzichtsPagina('goed')");
        antwoord4.setAttribute("onclick", "overzichtsPagina('')");
    }
    if (sessionStorage.countpagina == 1) {
        vraag.innerText = "Vraag 2";

        // Welke antwoorden goed zijn (antwoord 1)
        antwoord1.setAttribute("onclick", "overzichtsPagina('goed')");
        antwoord2.setAttribute("onclick", "overzichtsPagina('')");
        antwoord3.setAttribute("onclick", "overzichtsPagina('')");
        antwoord4.setAttribute("onclick", "overzichtsPagina('')");
    }
    if (sessionStorage.countpagina == 2) {
        vraag.innerText = "Vraag 3";

        // Welke antwoorden goed zijn (antwoord 1)
        antwoord1.setAttribute("onclick", "overzichtsPagina('goed')");
        antwoord2.setAttribute("onclick", "overzichtsPagina('')");
        antwoord3.setAttribute("onclick", "overzichtsPagina('')");
        antwoord4.setAttribute("onclick", "overzichtsPagina('')");
    }
    if (sessionStorage.countpagina == 3) {
        vraag.innerText = "Vraag 4";

        // Welke antwoorden goed zijn (antwoord 2)
        antwoord1.setAttribute("onclick", "overzichtsPagina('')");
        antwoord2.setAttribute("onclick", "overzichtsPagina('goed')");
        antwoord3.setAttribute("onclick", "overzichtsPagina('')");
        antwoord4.setAttribute("onclick", "overzichtsPagina('')");
    }
    if (sessionStorage.countpagina == 4) {
        vraag.innerText = "Vraag 5";

        // Welke antwoorden goed zijn (antwoord 4)
        antwoord1.setAttribute("onclick", "overzichtsPagina('')");
        antwoord2.setAttribute("onclick", "overzichtsPagina('')");
        antwoord3.setAttribute("onclick", "overzichtsPagina('')");
        antwoord4.setAttribute("onclick", "overzichtsPagina('goed')");
    }
    if (sessionStorage.countpagina == 5) {
        vraag.innerText = "Vraag 6";

        // Welke antwoorden goed zijn (antwoord 3)
        antwoord1.setAttribute("onclick", "overzichtsPagina('')");
        antwoord2.setAttribute("onclick", "overzichtsPagina('')");
        antwoord3.setAttribute("onclick", "overzichtsPagina('goed')");
        antwoord4.setAttribute("onclick", "overzichtsPagina('')");
    }
    if (sessionStorage.countpagina == 6) {
        vraag.innerText = "Vraag 7";

        // Welke antwoorden goed zijn (antwoord 1)
        antwoord1.setAttribute("onclick", "overzichtsPagina('goed')");
        antwoord2.setAttribute("onclick", "overzichtsPagina('')");
        antwoord3.setAttribute("onclick", "overzichtsPagina('')");
        antwoord4.setAttribute("onclick", "overzichtsPagina('')");
    }
    if (sessionStorage.countpagina == 7) {
        vraag.innerText = "Vraag 8";

        // Welke antwoorden goed zijn (antwoord 4)
        antwoord1.setAttribute("onclick", "overzichtsPagina('')");
        antwoord2.setAttribute("onclick", "overzichtsPagina('')");
        antwoord3.setAttribute("onclick", "overzichtsPagina('')");
        antwoord4.setAttribute("onclick", "overzichtsPagina('goed')");
    }
    if (sessionStorage.countpagina == 8) {
        vraag.innerText = "Vraag 9";

        // Welke antwoorden goed zijn (antwoord 2)
        antwoord1.setAttribute("onclick", "overzichtsPagina('')");
        antwoord2.setAttribute("onclick", "overzichtsPagina('goed')");
        antwoord3.setAttribute("onclick", "overzichtsPagina('')");
        antwoord4.setAttribute("onclick", "overzichtsPagina('')");
    }
    if (sessionStorage.countpagina == 9) {
        vraag.innerText = "Vraag 10";

        // Welke antwoorden goed zijn (antwoord 2)
        antwoord1.setAttribute("onclick", "overzichtsPagina('')");
        antwoord2.setAttribute("onclick", "overzichtsPagina('goed')");
        antwoord3.setAttribute("onclick", "overzichtsPagina('')");
        antwoord4.setAttribute("onclick", "overzichtsPagina('')");
    }
}

// * Gaat naar overzichtspagina wanneer een antwoord wordt gekozen. Daarnaast kan ook de tel voor de hoeveelheid goede antwoorden omhoog gaan afhankelijk van of de vraag goed beantwoord is
function overzichtsPagina(antwoord) {
    // Stuurt door naar overzichtspagina gym/fitness
    if (sessionStorage.soortquiz == "quiz_gymfitness") {
        if (antwoord == "goed") { // Tel goede antwoorden gaan omhoog als vraag goed is
            sessionStorage.questionsright++
            window.location = `../quizoverzicht/index.html?quiz_gymfitness`;
        }
        else {
            window.location = `../quizoverzicht/index.html?quiz_gymfitness`;
        }
    }

    // Stuurt door naar overzichtspagina gym/fitness
    if (sessionStorage.soortquiz == "quiz_gamers") {
        if (antwoord == "goed") { // Tel goede antwoorden gaan omhoog als vraag goed is
            window.alert(sessionStorage.questionsright);
            window.location = `../quizoverzicht/index.html?quiz_gamers`;
        }
        else {
            window.location = `../quizoverzicht/index.html?quiz_gamers`;
        }
    }
    
}

// * Stopt de quiz
function stopquiz() {
    sessionStorage.countpagina = 0;
    sessionStorage.questionsright = 0;
    sessionStorage.soortquiz = ""
    sessionStorage.naam = "";
    window.location = '../hoofdpagina/index.html';
}