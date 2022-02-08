const meerButton = document.querySelector("#meerButton");
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const h1Name = document.querySelector("h1");
const main = document.querySelector("main");

//Progressive disclosure
nav.classList.toggle("hiddenTransform");
main.classList.toggle("overflowHidden");

function overgangInfo() {
    header.classList.toggle("headerKlein");
    nav.classList.toggle("hiddenTransform");
    h1Name.classList.toggle("hiddenTransformFade");

    if (meerButton.innerHTML.length == 1) {
        meerButton.innerHTML = "Meer info";
    } else {
        meerButton.innerHTML = "^";
    }
}

meerButton.addEventListener("click", overgangInfo);

