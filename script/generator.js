/****************************************
 *       Générateur CSS - Gradiant      *
 ****************************************/

/* Button */
const button = document.querySelector('section:nth-of-type(2)>form>button');

/* Init affichage résulat */
const rDiv = document.querySelector('main>section:nth-of-type(2)>form>div');
const rP = document.querySelector('section:nth-of-type(2)>form>p');

/* Forme gradiant */
const form = document.querySelector('section:nth-of-type(2)>form>select');

/********************************************
 *  0 = Conique     |   2 = Horizontal      *
 *  1 = Central     |   3 = Vertical        *
 ********************************************/

button.addEventListener('click', () => {
    /* Init des couleurs */
    const gColor1 = document.querySelector('section:nth-of-type(2)>form>input:nth-of-type(1)').value;
    const gColor2 = document.querySelector('section:nth-of-type(2)>form>input:nth-of-type(2)').value;
    let formG ='';
    /* Choix de la forme */
    const select = document.querySelector('section:nth-of-type(2)>form>select').value;
        switch (select) {
            case '0':
                formG = 'conic-gradient(from 45deg, ';
                break;
            case '1':
                formG = 'radial-gradient(circle, ';
                break;
            case '2':
                formG = 'linear-gradient(0deg, ';
                break;
            case '3':
                formG = 'linear-gradient(90deg, ';
                break;
            default:
                console.log("Erreur choixForme");
        };
        
    console.log(formG);

    rP.textContent = 'background : ' + formG + gColor1 + ', ' + gColor2 + ');';
    rDiv.style.background = formG + gColor1 + ', ' + gColor2 + ')';
    console.log(rDiv);
    console.log(rDiv.style.background);
});


