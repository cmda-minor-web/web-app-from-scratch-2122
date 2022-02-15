const url = 'https://www.rijksmuseum.nl/api/nl/collection?key=S0VK6DCj&involvedMaker=Rembrandt+van+Rijn'

getPaintings()

function getPaintings() {
    
    const bodyList = bodyE('ul')

    fetch(url) 
        .then(function(response){
            return response.json() 
        })
        .then(function(paintings){   
            for (let i = 0; i < paintings.artObjects.length; i++) {     
            bodyList.insertAdjacentHTML('afterbegin', 
            `<li><img src="${paintings.artObjects[i].webImage.url.slice(0, -3)+"=s1000"}"></li>`) 
            }
        })
}

function bodyE(element) {
    return document.querySelector(element)
}