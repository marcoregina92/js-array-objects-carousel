const scheda = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


// Ciclo per inserire immagini
let addImages = "";
// let addText = "";

scheda.forEach((element, index) => {

    console.log(element, index);
    let image = `<img src="${element.image}">`;
    let title = `<h2 id="title">${element.title}</h2>`
    let text = `<p id="text">${element.text}</p>`
    
    addImages += `${image} ${title} ${text}`;
    console.log(image);
    console.log(title);
    console.log(text);
});

// Stampo le immagini in DOM
document.getElementById("boxImage").innerHTML += addImages;

// Inserisco la prima immagina di default
let currentImg = 0;
const images = document.querySelectorAll("#boxImage img");
images[currentImg].classList.add("blockImage");

// Inserisco Titolo e testo
const insertTitle = document.querySelectorAll("#title");
const insertText = document.querySelectorAll("#text");
insertTitle[currentImg].classList.add("blockTitle");
insertText[currentImg].classList.add("blockText");



document.getElementById("btnRight").addEventListener("click", function () {
    console.log("avanti");
    if (currentImg < scheda.length - 1) {
        images[currentImg].classList.remove("blockImage");
        insertTitle[currentImg].classList.remove("blockTitle");
        insertText[currentImg].classList.remove("blockText");
        currentImg++;
        images[currentImg].classList.add("blockImage");
        insertTitle[currentImg].classList.add("blockTitle");
        insertText[currentImg].classList.add("blockText");
    }else if (currentImg == scheda.length - 1) {
        images[currentImg].classList.remove("blockImage");
        insertTitle[currentImg].classList.remove("blockTitle");
        insertText[currentImg].classList.remove("blockText");
        currentImg = 0;
        images[currentImg].classList.add("blockImage");
        insertTitle[currentImg].classList.add("blockTitle");
        insertText[currentImg].classList.add("blockText");
    }
});

document.getElementById("btnLeft").addEventListener("click", function () {
    console.log("indietro");
    if (currentImg > 0) {
        images[currentImg].classList.remove("blockImage");
        insertTitle[currentImg].classList.remove("blockTitle");
        insertText[currentImg].classList.remove("blockText");
        currentImg--;
        images[currentImg].classList.add("blockImage");
        insertTitle[currentImg].classList.add("blockTitle");
        insertText[currentImg].classList.add("blockText");
    }else if (currentImg == 0) {
        images[currentImg].classList.remove("blockImage");
        insertTitle[currentImg].classList.remove("blockTitle");
        insertText[currentImg].classList.remove("blockText");
        currentImg = images.length - 1;
        images[currentImg].classList.add("blockImage");
        insertTitle[currentImg].classList.add("blockTitle");
        insertText[currentImg].classList.add("blockText");
    }
});

// Inserisco Autoplay 

setInterval(function () {
    if (currentImg < scheda.length - 1) {
        images[currentImg].classList.remove("blockImage");
        insertTitle[currentImg].classList.remove("blockTitle");
        insertText[currentImg].classList.remove("blockText");
        currentImg++;
        images[currentImg].classList.add("blockImage");
        insertTitle[currentImg].classList.add("blockTitle");
        insertText[currentImg].classList.add("blockText");
    }else if (currentImg == scheda.length - 1) {
        images[currentImg].classList.remove("blockImage");
        insertTitle[currentImg].classList.remove("blockTitle");
        insertText[currentImg].classList.remove("blockText");
        currentImg = 0;
        images[currentImg].classList.add("blockImage");
        insertTitle[currentImg].classList.add("blockTitle");
        insertText[currentImg].classList.add("blockText");
    }
}, 2000);