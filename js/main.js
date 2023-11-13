imagesPath = [
    "./img/01.webp",
    "./img/02.webp",
    "./img/03.webp",
    "./img/04.webp",
    "./img/05.webp"
];

let insertImage = "";
for (let i = 0; i < imagesPath.length; i++) {
    const imgPath = imagesPath [i];
    insertImage += `<img src="${imgPath}">`;   
}
document.getElementById("boxImage").innerHTML = insertImage;

let currentImg = 0;
const images = document.querySelectorAll("#boxImage img");
images[currentImg].classList.add("blockImage");

document.getElementById("btnRight").addEventListener("click", function () {
    console.log("avanti");
    if (currentImg < images.length - 1) {
        images[currentImg].classList.remove("blockImage");
        currentImg++;
        images[currentImg].classList.add("blockImage");
    }else if (currentImg == images.length - 1) {
        images[currentImg].classList.remove("blockImage");
        currentImg = 0;
        images[currentImg].classList.add("blockImage");
    }
});

document.getElementById("btnLeft").addEventListener("click", function () {
    console.log("indietro");
    if (currentImg > 0) {
        images[currentImg].classList.remove("blockImage");
        currentImg--;
        images[currentImg].classList.add("blockImage");
    }else if (currentImg == 0) {
        images[currentImg].classList.remove("blockImage");
        currentImg = images.length - 1;
        images[currentImg].classList.add("blockImage");
    }
});