// Render ES

const list = $("ul");

export function render(detailed) {
  list.insertAdjacentHTML(
    "beforebegin",
    `<a href="#information">
    <li>
    <img class="art" src="${
      detailed.artObject.webImage.url.slice(0, -3) + "=s1000"
    }" alt="${detailed.artObject.title}"/>
    <h1>${detailed.artObject.dating.sortingDate}</h1>
    <h1>${detailed.artObject.title}</h1>
    </li></a>
    `
  );
}

function $(element) {
  return document.querySelector(element);
}
