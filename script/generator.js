/****************************************
 *       Générateur CSS - Gradiant      *
 ****************************************/

/* Init des couleurs */
const gColor1 = document.querySelector('section:nth-of-type(2)>form>input:nth-of-type(1)').value;
const gColor2 = document.querySelector('section:nth-of-type(2)>form>input:nth-of-type(2)').value;

/* Forme gradiant */
const form = document.querySelector('section:nth-of-type(2)>form>select');

/********************************************
 *  1 = Angulaire   |   3 = Horizontal      *
 *  2 = Central     |   4 = Vertical        *
 ********************************************/

function choixForme() {
    const select = document.querySelector('section:nth-of-type(2)>form>select');
    const valueSelect = document.select.options[select.select]
}
console.log(valueSelect);
function generatorGradient() {
    body.style.background =
        form + 
}

/* Changement en direct dés modification */
document.querySelector('section:nth-of-type(2)>form>input:nth-of-type(1)').adEventListener("input", generatorGradient);
document.querySelector('section:nth-of-type(2)>form>input:nth-of-type(2)').adEventListener("input", generatorGradient);

