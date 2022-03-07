// api ES

import { render } from "./render.js";
import { skeletonState } from "./ui.js";

const rijksAPI =
  "https://www.rijksmuseum.nl/api/nl/collection?key=8Rynz75W&p=0-n&ps=10&imgonly=true";

const stateDisplay = document.getElementsByClassName("emptyList");

// Functions

export function getData() {
  fetch(rijksAPI)
    .then(function (response) {
      return response.json();
    })
    .then(function (collection) {
      console.log(collection);
      skeletonState();
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
