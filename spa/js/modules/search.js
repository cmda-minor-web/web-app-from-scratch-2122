export function search() {
  const searchForm = $("header form");
  const searchInput = $("header input");
  const searchAPI =
    "https://www.rijksmuseum.nl/api/nl/collection?key=8Rynz75W&q=";

  function searchItems(e) {
    fetch(searchAPI + searchInput.value)
      .then(function (response) {
        return response.json();
      })
      .then(function (collection) {
        console.log(collection);
      });
    e.preventDefault();
  }
  searchForm.addEventListener("submit", searchItems);

  function $(element) {
    return document.querySelector(element);
  }
}
