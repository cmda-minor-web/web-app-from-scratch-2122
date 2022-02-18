const sectionData = document.querySelector("section");
const aantalResults = 100;
const imgSize = 700;

function getAndRenderData () {
    
    //Verwijder huidige kunstwerken
    const articleElements = document.querySelectorAll("section > article");
    for (var i = 0, l = articleElements.length; i < l; i++) {
        articleElements[i].remove();
    }
    
    //Titel vullen met zoekterm
    const h1 = document.querySelector("h1");
    let inputField = document.querySelector("input").value;
    h1.innerHTML = "Gezocht naar: " + inputField; 

    //In geval geen input zoekbalk, laat uitgelicht zien
    if (inputField == 0) {
        inputField = "";
        h1.innerHTML = "Uitgelicht"; 
    }

    //Stel URL in (100)
    const getURL = "https://www.rijksmuseum.nl/api/nl/collection?key=AbH3UnTw&q=" + inputField + "&ps=" + aantalResults;
    
    //Haal data op
    fetch(getURL).then(response => response.json())
    .then(data => {
        
        //Pak kunst objecten
        const objects = data.artObjects;
        console.log(objects);

        if (objects.length == 0) {

        } 
        else {
            //Genereer HTML blokken voor elk object
            objects.forEach(number => {
                let scaledImg = number.webImage.url + imgSize;
                sectionData.insertAdjacentHTML("beforeend",`
                    <article>
                        <h2>${number.title}</h2>
                        <img src="${scaledImg}">
                    </article
                `)
            });
        }
    }).catch(error => console.log(error))
}

getAndRenderData();