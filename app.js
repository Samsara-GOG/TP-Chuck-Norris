// Générateur de punchlines "Chuck Norris"

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

const body = document.body;

function changeAll(event) {

    // Générer la couleur aléatoirement
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const red = randomBetween(0, 255);
    const green = randomBetween(0, 255);
    const blue = randomBetween(0, 255);
    const rgb = `rgb(${red},${green},${blue})`;

    // Modifier les couleurs
    // Couleur de fond du body
    const color1 = document.querySelector("body");
    color1.style.backgroundColor = rgb;
    // Couleur du texte de la citation
    const color2 = document.querySelector(".quote");
    color2.style.color= rgb;
    // Couleur du texte de l'auteur
    const color3 = document.querySelector(".author");
    color3.style.color = rgb;
    // Couleur du fond et de la bordure du bouton
    const color4 = document.querySelector(".newQuote");
    color4.style.backgroundColor = rgb;
    color4.style.borderColor = rgb;
    // Générer la punchline aléatoirement
    punchline = punchlines[Math.floor(Math.random() * (punchlines.length))];
    // Modifier la punchline avec un symbole de citation
    const quoted = document.querySelector(".quote");
    quoted.innerHTML = "<i class=\"fa fa-quote-left mr-3 text-success\"></i>" + punchline;
}
// Au click du bouton, la fonction changeAll se lance
const quote = document.querySelector(".newQuote");
quote.addEventListener("click", changeAll);
