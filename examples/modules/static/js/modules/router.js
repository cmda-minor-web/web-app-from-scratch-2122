import { getData } from './api.js';
import { loader } from './loader.js';

export function handleRoutes() {
  routie({
    gifs: () => {
      loader('active');
      console.log(getData());
      getData().then(() => updateUI('gifs'));
    },
    //#giphy/425367
    'gifs/:id': id => {
      loader('active');
      getData(id).then(() => updateUI('giphy'));
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
