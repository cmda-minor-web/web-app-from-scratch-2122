import { $ } from './ui.js'

export function render(data, id) {
  if (!id) {
    collection(data)
  } else {
    item(data)
  }
}

function collection(data) {
  const section = $('section[data-route=gifs]')

  data.forEach((item, i) => {
    const html = `
      <article>
        <a href="#gifs/${item.id}">
          <img src="https://media.giphy.com/media/${item.id}/giphy.gif">
        </a>
      </article>
    `;

    section.insertAdjacentHTML('beforeend', html)
  })
}

function item(data) {
  const section = $('section[data-route=giphy]')

  const html = `
    <article>
      <h2>${data.title}</h2>
      <img src="https://media.giphy.com/media/${data.id}/giphy.gif">
    </article>
  `;

  clearElement(section)
  section.insertAdjacentHTML('beforeend', html)
}

function clearElement(node) {
  while (node.firstChild) {
    node.removeChild(node.lastChild)
  }
}
