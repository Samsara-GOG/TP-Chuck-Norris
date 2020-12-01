// Objectif: Reproduire un générateur de punchlines "Chuck Norris"

// Consignes:
// - Dans un tableau, stocker au moins 10 punchlines de Chuck Norris
// - A chaque click du bouton
// o générer une couleur aléatoire 
// o récupérer aléatoirement une des punchlines
// o Afficher la nouvelle phrase
// o Remplacer l'ancienne couleur du texte/bouton/arrière-plan par la nouvelle

// A rendre: lien git du projet

    // Tableau des punchlines
    const punchlines = [
        "Si tu te pointes encore tu peux être sûr que tu repars avec la bite dans un Tupperware.",
        "Chuck Norris peut faire du feu en frottant deux glaçons.",
        "Chuck Norris a piraté le Pentagone. Avec un grille-pain.",
        "Chuck Norris peut faire travailler un fonctionnaire.",
        "Quand Chuck Norris viole la loi, elle en redemande.",
        "Chuck Norris peut faire des ronds avec une equerre.",
        "Toi tu commences à me baver sur les rouleaux.",
        "Chuck Norris a déjà compté jusqu'à l'infini. Deux fois.",
        "Chuck Norris n'est pas égal à lui-même, il est meilleur.",
        "Chuck Norris ne ment jamais, c'est la vérité qui se trompe."
    ];
// Générer les Punchlines aléatoires



// console.log(rgb);

const body = document.body;

function changeAll(event) {

    // const color = event.target.style = rgb;
    // const backgroundColor = event.target.style = `background-color: ${rgb}`;
    // body.innerHTML = backgroundColor;
    // console.log(color);

    // Modifier les couleurs

    // Générer la couleur aléatoire
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const red = randomBetween(0, 255);
    const green = randomBetween(0, 255);
    const blue = randomBetween(0, 255);
    const rgb = `rgb(${red},${green},${blue})`;

    // Background-color de body
    const color1 = document.querySelector("body");
    color1.style.backgroundColor = rgb;
    // Color du texte de description
    const color2 = document.querySelector(".quote");
    color2.style.color= rgb;
    // Color du texte de author
    const color3 = document.querySelector(".author");
    color3.style.color = rgb;
    // Color du background et border de newQuote
    const color4 = document.querySelector(".newQuote");
    color4.style.backgroundColor = rgb;
    color4.style.borderColor = rgb;



    // Générer la punchline aléatoire
    punchline = punchlines[Math.floor(Math.random() * (punchlines.length))];

    const quoted = document.querySelector(".quote");
    quoted.textContent = "“" + punchline;
}

const quote = document.querySelector(".newQuote");
quote.addEventListener("click", changeAll);
