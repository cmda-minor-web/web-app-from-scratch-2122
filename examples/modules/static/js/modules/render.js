import { loader } from './loader.js';

export function render(data, id) {
  if (!id) {
    collection(data);
  } else {
    item(data);
  }
}

function collection(data) {
  const section = document.querySelector('section[data-route=gifs]');
  loader('in-active');

  data.forEach((item, i) => {
    const html = `
      <article>
        <a href="#gifs/${item.id}">
          <img src="https://media.giphy.com/media/${item.id}/giphy.gif">
        </a>
      </article>
    `;
    section.insertAdjacentHTML('beforeend', html);
  });
}

function item(data) {
  const section = document.querySelector('section[data-route=giphy]');

  loader('in-active');

  const html = `
    <article>
      <h2>${data.title}</h2>
      <img src="https://media.giphy.com/media/${data.id}/giphy.gif">
    </article>
  `;

  clearElement(section);
  section.insertAdjacentHTML('beforeend', html);
}

function clearElement(node) {
  while (node.firstChild) {
    node.removeChild(node.lastChild);
  }
}
