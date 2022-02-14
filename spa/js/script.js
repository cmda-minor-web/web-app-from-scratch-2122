
const main = document.querySelector('main');

//getAndRenderData()

function getAndRenderData () {
    const articleElements = document.querySelectorAll("main > article");
    const article = Array.prototype.slice.call(articleElements);

    for (var i = 0, l = articleElements.length; i < l; i++) {
        article[i].remove();
    }
    
    const inputField = document.querySelector('input').value
    const getURL = 'https://www.rijksmuseum.nl/api/nl/collection?key=AbH3UnTw&q=' + inputField;
    console.log(getURL)


    
    fetch(getURL).then(response => response.json())
    .then(data => {
        const obj = data.artObjects;
        console.log(obj);
        obj.forEach(number => {
            console.log(number.id);    
            main.insertAdjacentHTML('afterbegin',`
                
                <article>
                    <img src="${number.webImage.url}">
                </article
            `)
        });
    }).catch(error => console.log(error))
}