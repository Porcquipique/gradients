 // onclick="plus()"        onclick="moins()"
 
/*******************************************
*       Version 1 -= Marche pas =-         
*******************************************/

/*******************************************
* Fonction modification taille
*******************************************/
function moins(tailleP) {
    result = nbI - 1;
    body.style.fontSize = result + 'px';
    console.log(nbI);
}

function plus(tailleP) {
    result = (nbI + 1) + 'px';
    body.style.fontSize = result;
    console.log(nbI);
}

/*********************************************
 * Boutton HTML
*********************************************/
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



/*******************************************
*      Version 2 -= Marche pour le + =-         
*******************************************/

/*******************************************
* Initialisation des valeurs 
*******************************************/

// Def des button + et -
const buttonPlus = document.querySelector('button:nth-of-type(1)');
const buttonMoins = document.querySelector('button:nth-of-type(2)');

//Node list
const tailleP = document.querySelectorAll('p');


function plus(tailleP, onlyNb) {
    tailleP.style.fontSize = (onlyNb + 3) + 'px';
}

function moins(tailleP, onlyNb) {
    tailleP.style.fontSize = (onlyNb - 3) + 'px';
}

button.addEventListener('click', () => {
    const i = window.getComputedStyle(document.querySelector('p')).fontSize;
    const nbI = parseFloat(i);
    para.forEach((element) => {
        growText(element, onlyNumberBody);
        console.log(element.style.fontSize);
    });
});