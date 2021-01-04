// Ce script permet d'augmenter ou de diminuer la taille de la police de la page 

/*******************************************
* Initialisation des valeurs 
*******************************************/

// Def des button + et -
const buttonPlus = document.querySelector('button:nth-of-type(2)');
const buttonMoins = document.querySelector('button:nth-of-type(1)');

//Node list
const tailleP = document.querySelectorAll('p, li');

//Vérification si la personne n'a pas déjà zoomer ou dé-zoomer
let c = 0;
/*  -1  dé-zoomer 
    0   valeur de départ
    1   zoommer
*/

/*******************************************
* Fonction modification taille
*******************************************/

function plus(tailleP, onlyNb) {
    // 16px est la taille de base et +4 est égale à une augmentation de 25%
    tailleP.style.fontSize = (onlyNb + 4) + 'px';
}

function moins(tailleP, onlyNb) {
    // 16px est la taille de base et -4 est égale à une diminution de 25%
    tailleP.style.fontSize = (onlyNb - 4) + 'px';
}

/*********************************************
 * Boutton HTML
*********************************************/

buttonPlus.addEventListener('click', () => {
    // Vérification si la personne n'a pas déjà appuyé sur +
    if (c <= 0){
        const i = window.getComputedStyle(document.querySelector('p')).fontSize;
        const nbI = parseFloat(i);
        tailleP.forEach((element) => {
            plus(element, nbI);
            console.log(element.style.fontSize);
        });
        //Ajout de 1 pour dire qu'on a zoomer une fois
        c += 1;
    }
    console.log(c);
});

buttonMoins.addEventListener('click', () => {
    // Vérification si la personne n'a pas déjà appuyé sur -
    if (c >= 0){
        const i = window.getComputedStyle(document.querySelector('p')).fontSize;
        const nbI = parseFloat(i);
        tailleP.forEach((element) => {
            moins(element, nbI);
            console.log(element.style.fontSize);
        });
        //Soustraction de 1 pour dire qu'on a dé-zoomer une fois
        c -= 1;
    }
    console.log(c);
});