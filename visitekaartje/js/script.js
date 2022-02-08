const meerButton = document.querySelector("#meerButton");
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const h1Name = document.querySelector("h1");

//Progressive disclosure
nav.classList.toggle("hiddenTransform");

function overgangInfo() {
    header.classList.toggle("headerKlein");
    nav.classList.toggle("hiddenTransform");
    h1Name.classList.toggle("hiddenTransformFade");

    if (meerButton.innerHTML.length == 1) {
        meerButton.innerHTML = "Meer info";
    } else {
        meerButton.innerHTML = "X";
    }
}

meerButton.addEventListener("click", overgangInfo);

