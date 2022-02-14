
const sectionData = document.querySelector('section');
let inputField = 'bloem'

function setData () {
    const articleElements = document.querySelectorAll("section > article");
    const article = Array.prototype.slice.call(articleElements);

    for (var i = 0, l = articleElements.length; i < l; i++) {
        article[i].remove();
    }
    
    const getURL = 'https://www.rijksmuseum.nl/api/nl/collection?key=AbH3UnTw&q=' + inputField;
    console.log(getURL)


    
    fetch(getURL).then(response => response.json())
    .then(data => {
        const obj = data.artObjects;
        console.log(obj);
        obj.forEach(number => {
            console.log(number.id);    
            sectionData.insertAdjacentHTML('beforeend',`
                
                <article>
                    <h1>${number.title}</h1>
                    <img src="${number.webImage.url}">
                </article
            `)
        });
    }).catch(error => console.log(error))
}

setData();

function getAndRenderData () {
    const articleElements = document.querySelectorAll("section > article");
    const article = Array.prototype.slice.call(articleElements);
    const h1 = document.querySelector("h1");

    for (var i = 0, l = articleElements.length; i < l; i++) {
        article[i].remove();
    }
    
    let inputField = document.querySelector('input').value;
    h1.innerHTML = "Gezocht naar: " + inputField; 
    const getURL = 'https://www.rijksmuseum.nl/api/nl/collection?key=AbH3UnTw&q=' + inputField;
    console.log(getURL)


    
    fetch(getURL).then(response => response.json())
    .then(data => {
        const obj = data.artObjects;
        console.log(obj);
        obj.forEach(number => {
            console.log(number.id);    
            sectionData.insertAdjacentHTML('beforeend',`
                
                <article>
                    <img src="${number.webImage.url}">
                </article
            `)
        });
    }).catch(error => console.log(error))
}

