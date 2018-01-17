/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
// Knop like
var HeartOn = false;

function switchHeart() {
    var heart = document.querySelector('#heartje');
    var likeContainer = document.querySelector('.liken');
    var likeText = likeContainer.querySelector('span');

    if (HeartOn) {
      	HeartOn = false;
        likeContainer.classList.remove('isLiked');
        heart.src = "./styles/Iconen/heartje.png";
        likeText.innerHTML = 'Like';
        console.log("Het hartje word rood");
    } else {
      	HeartOn = true;
        likeContainer.classList.add('isLiked');
        heart.src = "./styles/Iconen/heartRood.png";
        likeText.innerHTML = 'Dislike';
        console.log("Het hartje word grijs");
    }
}


document.querySelector('.liken').addEventListener('click', switchHeart, false);


// knop toevoegen
var AddOn = false;

function switchAdd() {
    var add = document.querySelector('#toevoegen');
    var addContainer = document.querySelector('.Add');
    var addText = addContainer.querySelector('span');

    if (AddOn) {
      	AddOn = false;
        add.src = "./styles/Iconen/Toevoegen.png";
        addContainer.style.background = '#00BFFF';
        addText.innerHTML = 'Toevoegen';
        console.log("Verwijderd");
    } else {
      	AddOn = true;
        add.src = "./styles/Iconen/Verwijderen.gif";
        addContainer.style.background = '#003082';
        addText.innerHTML = 'Verwijderen';
        console.log("Toegevoegd");
    }
}


document.querySelector('.Add').addEventListener('click', switchAdd, false);
