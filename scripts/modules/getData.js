import { bodyE } from './bodyElement.js'
import { url } from './variables.js'

export function getPaintings() {
    
    const bodyList = bodyE('ul')

    fetch(url) 
        .then(function(response){
            return response.json() 
        })
        .then(function(paintings){   
            for (let i = 0; i < paintings.artObjects.length; i++) {     
            bodyList.insertAdjacentHTML('afterbegin', 
            `<li><img src="${paintings.artObjects[i].webImage.url.slice(0, -3)+"=s1000"}"><p>${paintings.artObjects[i].longTitle}<p/></li>`) 
            }
        })
}
