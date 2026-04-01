// Hier staan alle functies voor de leaderboard.

// * Hier worden de arrays voor de namen gemaakt voor beide quizzen
// P.S. JavaScript telt in plaats van 1 naar 10 van 0 naar 9, dus de naam 'rank0' is gekozen voor de eerste naam vanwege hoe Javascript werkt (en eigenlijk ook hoe deze script werkt).



let leaderboard_gymfitness = {
    rank0: "testnaamgymfitness",
    rank1: "",
    rank2: "",
    rank3: "",
    rank4: "",
    rank5: "",
    rank6: "",
    rank7: "",
    rank8: "",
    rank9: "",
}

let leaderboard_gamers = {
    rank0: "testnaamgamers",
    rank1: "",
    rank2: "",
    rank3: "",
    rank4: "",
    rank5: "",
    rank6: "",
    rank7: "",
    rank8: "",
    rank9: "",
}

let count = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let counter in count) {
    window.alert(counter);

    let gymfitness_insertnaam = document.getElementById(`rank_quizgymfitness${counter}`);

    
}




// * Bij activatie van deze functie wordt gevraagd of de gebruiker zijn eindscore in de leaderboard wilt zetten
function vraag() {
        // Vraag
        let antwoord = window.prompt("Wil je jouw score in de leaderboard zetten? (ja/nee)");
        antwoord.toLowerCase();
        
        // Hier wordt gecheckt of de gebruiker ja of nee heeft geantwoord
        if (antwoord == "ja") {
            if (sessionStorage.soortquiz == "quiz_gymfitness") {
                window.alert("nog bewerken. van gym/fitness quiz");
            }
            if (sessionStorage.soortquiz == "quiz_gamers") {
                window.alert("nog bewerken. van gym/fitness quiz");
            }

        }

        if (antwoord != "ja" && antwoord != "nee") {
            vraag();
        }
    }