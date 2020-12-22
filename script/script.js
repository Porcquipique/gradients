let i = document.style.getPropertyValue(fontSize);
console.log(i);

/*----------- Diminution taille police -----------*/ 
/* Enleve 1 à la taille de la police*/
function moins() {
    i -= 1;
    body.style.fontSize = 'i';
    console.log(i);
}

/*----------- Augmentation taille police -----------*/ 
/* Ajoute 1 à la taille de la police*/
function plus() {
    i += 1;
    body.style.fontSize = 'i';
    console.log(i);
}