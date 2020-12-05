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
    "Rien ne sert de jouer aux échecs avec Chuck Norris, il ne connait pas l'échec.",
    "Rien ne sert de chercher les pokemons. Chuck Norris les a déjà tous attrapé.",
    "À son mariage, Chuck Norris avait Oncle Ben's en personne pour lui jeter du riz.",
    "Si tu te pointes encore tu peux être sûr que tu repars avec la bite dans un Tupperware.",
    "Si Chuck Norris avait été dans « Lost », il aurait ramené l'île à la rame, jusqu'au Texas.",
    "Un jour, Chuck Norris a perdu son alliance. Depuis c'est le bordel dans les terres du milieu...",
    "Les ennemis de Chuck Norris lui disent souvent d'aller au diable. Le Diable aimerait bien qu'ils arrêtent.",
    "Toi tu commences à me baver sur les rouleaux.",
    "Quand Chuck Norris viole la loi, elle en redemande.",
    "Chuck Norris peut faire des ronds avec une equerre.",
    "Chuck Norris peut faire travailler un fonctionnaire.",
    "Chuck Norris a déjà compté jusqu'à l'infini. Deux fois.",
    "Chuck Norris peut faire du feu en frottant deux glaçons.",
    "Chuck Norris a piraté le Pentagone. Avec un grille-pain.",
    "Chuck Norris n'est pas égal à lui-même, il est meilleur.",
    "Chuck Norris ne ment jamais, c'est la vérité qui se trompe.",    
    "Chuck Norris a un jour avalé un paquet entier de somnifères. Il a cligné des yeux.",
    "Quand Chuck Norris s’est mis au judo, David Douillet s’est mis aux pièces jaunes.",
    "Chuck Norris n'allume jamais la lumière, c'est l'obscurité qui s'éteint devant lui",
    "Wall Street n'est que la 3ème bourse au monde, il y a d'abord les deux de Chuck Norris.",
    "Chuck Norris enfant n'envoyait pas de lettres au Père Noël. Il envoyait des ultimatums.",
    "Chuck Norris n'a pas reçu son diplôme du bac. Les correcteurs comptent encore les points.",
    "Chuck Norris est mort depuis 10 ans, mais la Mort n'a pas encore trouvé le courage d'aller lui dire."
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
    // Couleur de la source des citations
    const color5 = document.querySelector(".source");
    color5.style.color = rgb;
    // Générer la punchline aléatoirement
    punchline = punchlines[Math.floor(Math.random() * (punchlines.length))];
    // Modifier la punchline avec un symbole de citation
    const quoted = document.querySelector(".quote");
    quoted.innerHTML = "<i class=\"fa fa-quote-left mr-3 text-success\"></i>" + punchline;
}
// Au click du bouton, la fonction changeAll se lance
const quote = document.querySelector(".newQuote");
quote.addEventListener("click", changeAll);
