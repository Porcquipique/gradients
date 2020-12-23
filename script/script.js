 /*- Ce script permet d'augmenter ou de diminuer la taille de la police de la page */

 /* ========== Initialisation des valeurs ==========*/

    // Récupération de la valeur de fontSize dans le CSS
const i = window.getComputedStyle(document.querySelector('body')).fontSize;
    // Récupération de la valeur sans l'unité px
let nbI = parseFloat(i);
let result = '';

const body = document.querySelector('body');
// Def des button + et -
const buttonPlus = document.querySelector('button:nth-of-type(1)');
const buttonMoins = document.querySelector('button:nth-of-type(2)');

const tailleP = document.querySelectorAll('p');

/*===== Fonction modification taille ======*/
function moins(tailleP) {
    result = nbI - 1;
    body.style.fontSize = result + 'px';
    console.log(nbI);
    return nbI;
}

function plus(tailleP) {
    result = (nbI + 1) + 'px';
    body.style.fontSize = result;
    console.log(nbI);
}

/*===== Boutton HTML ======*/
buttonMoins.addEventListener('click', () => {
    tailleP.forEach((element) =>{
        moins(element);
    });
    console.log(body.style.fontSize);
});

buttonPlus.addEventListener('click', () => {
    tailleP.forEach((element) => {
        plus(element);
    });
    console.log(body.style.fontSize);
});




/*----------- Augmentation taille police -----------*/ 
/* Ajoute 1 à la taille de la police*/
/*function plus() {
    nbI += 1;
    result = nbI + 'px';
    console.log(nbI);
    console.log(result);
}*/