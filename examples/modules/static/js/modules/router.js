import { getData } from './api.js'
import { render } from './render.js'
import { updateUI } from './ui.js'
import './vendor/routie.min.js'

export function handleRoutes() {
  routie(
    {
    'gifs': () => {
      getData().then(data => {
        render(data)
        updateUI('gifs')
      });
    },
    'gifs/:id': id => {
      getData(id).then(data => {
        render(data, id)
        updateUI('giphy')
      });
    },
    'about': () => {
      updateUI('about')
    }
  })
}


