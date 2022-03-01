// api ES

import { render } from "./render.js";

// let pagenr = 0;
// let aantal = 10;

const rijksAPI =
  "https://www.rijksmuseum.nl/api/nl/collection?key=8Rynz75W&p=0-n&ps=10&imgonly=true";

const stateDisplay = document.getElementsByClassName("emptyList");

// export function volgende() {
//   pagenr++;
//   getData();
// }
// export function vorige() {
//   pagenr--;
//   getData();
// }

// Functions

export function getData() {
  fetch(rijksAPI)
    .then(function (response) {
      return response.json();
    })
    .then(function (collection) {
      console.log(collection);
      const skeleton = $("ul.empty-list");
      console.log(skeleton);
      skeleton.classList.toggle("hidden");
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

function $(element) {
  return document.querySelector(element);
}
