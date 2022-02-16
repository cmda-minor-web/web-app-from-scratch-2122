"use strict";

// key: 8Rynz75W

// 1. variables (aka bindings), on top of global scope
// const rijks ="https://www.rijksmuseum.nl/api/nl/collection/SK-C-5?key=8Rynz75W";
const rijksAPI =
  "https://www.rijksmuseum.nl/api/nl/collection?key=8Rynz75W&p=0-n&ps=10&imgonly=true";

const stateDisplay = document.getElementsByClassName("emptyList");
// 2. the Story

getData();

// 3. Functions

function getData() {
  // stateDisplay.textContent = "Loading";

  fetch(rijksAPI)
    .then(function (response) {
      return response.json();
    })
    .then(function (collection) {
      console.log(collection);
      const list = $("ul");
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
            list.insertAdjacentHTML(
              "beforebegin",
              `<li>
              <img class="art" src="${
                detailed.artObject.webImage.url.slice(0, -3) + "=s1000"
              }" alt="${detailed.artObject.title}"/>
              <h1>${detailed.artObject.title}</h1>
              <h1>${detailed.artObject.dating.presentingDate}</h1>
              </li>`
            );
          });
      }
    });

  // functions
  function $(element) {
    return document.querySelector(element);
  }
}
