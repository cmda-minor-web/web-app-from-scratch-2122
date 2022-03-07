import { render } from "./render.js";

export function search() {
  const searchForm = $("header form");
  let searchInput = $("header input");
  const searchAPI =
    "https://www.rijksmuseum.nl/api/nl/collection?key=8Rynz75W&ps=10&q=";

  function searchItems() {
    const li = $$("li");
    if (li != null) {
      for (let i = 0; i < li.length; i++) {
        li[i].remove();
      }
    }

    fetch(searchAPI + searchInput.value)
      .then(function (response) {
        return response.json();
      })
      .then(function (collection) {
        console.log(collection);
        for (let i = 0; i < collection.artObjects.length; i++) {
          fetch(
            "https://www.rijksmuseum.nl/api/nl/collection/" +
              collection.artObjects[i].objectNumber +
              "?key=8Rynz75W&p=0-n&ps=10&imgonly=true"
          )
            .then(function (response) {
              return response.json();
            })

            .then(function (detailed) {
              render(detailed);
            });
        }
      });
  }

  searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    searchItems();
  });

  function $(element) {
    return document.querySelector(element);
  }
}

function $$(element) {
  return document.querySelectorAll(element);
}
