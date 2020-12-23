let i = window.getComputedStyle(document.querySelector('body')).fontSize;
let result = document.getElementsByTagName("body")[0].style.fontSize;
console.log(i);

/*----------- Diminution taille police -----------*/ 
/* Enleve 1 à la taille de la police*/
function moins() {
    i -= 1;
    result = i + 'em';
    console.log(i);
}

/*----------- Augmentation taille police -----------*/ 
/* Ajoute 1 à la taille de la police*/
function plus() {
    i += 1;
    body.style.fontSize = i + 'em';
    console.log(i);
}