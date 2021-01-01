// Ce script permet d'augmenter ou de diminuer la taille de la police de la page 

/*******************************************
* Initialisation des valeurs 
*******************************************/

// Def des button + et -
const buttonPlus = document.querySelector('button:nth-of-type(1)');
const buttonMoins = document.querySelector('button:nth-of-type(2)');

//Node list
const tailleP = document.querySelectorAll('p');

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
    const i = window.getComputedStyle(document.querySelector('p')).fontSize;
    const nbI = parseFloat(i);
    tailleP.forEach((element) => {
        plus(element, nbI);
        console.log(element.style.fontSize);
    });
});

buttonMoins.addEventListener('click', () => {
    const i = window.getComputedStyle(document.querySelector('p')).fontSize;
    const nbI = parseFloat(i);
    tailleP.forEach((element) => {
        moins(element, nbI);
        console.log(element.style.fontSize);
    });
});