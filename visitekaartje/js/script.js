const meerButton = document.querySelector("#meerButton");
const header = document.querySelector("header");


function overgangInfo() {
    console.log("test");
    header.classList.toggle("headerKlein");
}


meerButton.addEventListener("click", overgangInfo);

