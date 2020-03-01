import { getData } from './api.js';
import { loader } from './loader.js';
import { render } from './render.js';

export function handleRoutes() {
  routie({
    gifs: () => {
      loader('active');
      getData().then(data => {
        render(data);
        updateUI('gifs');
      });
    },
    //#giphy/425367
    'gifs/:id': id => {
      loader('active');
      getData(id).then(data => {
        render(data, id);
        updateUI('giphy');
      });
    }
  });
}

function updateUI(route) {
  const sections = document.querySelectorAll('section');
  const activeSection = document.querySelector(`[data-route=${route}]`);

  sections.forEach(section => {
    section.classList.remove('active');
  });

  activeSection.classList.add('active');
}
