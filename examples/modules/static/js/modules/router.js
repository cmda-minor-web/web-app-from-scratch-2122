import { getData } from './api.js';
import { render } from './render.js';
import { loader } from './loader.js';
import { updateUI } from './ui.js';
import './vendor/routie.min.js';

export function handleRoutes() {
  routie(
    {
    'gifs': () => {
      loader('active');
      getData().then(data => {
        render(data);
        updateUI('gifs');
      });
    },
    'gifs/:id': id => {
      loader('active');
      getData(id).then(data => {
        render(data, id);
        updateUI('giphy');
      });
    },
    'about': id => {
      console.log('about route')
      updateUI('about');
    }
  });
}


