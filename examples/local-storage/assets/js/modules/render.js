const render = {
    tagline(data) {
        const newH1 = document.createElement('h1')
        newH1.classList.add('tagline')
        newH1.innerText = data.daily.summary
        document.body.appendChild(newH1)
    }
}

export {render}