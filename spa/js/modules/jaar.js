export function jaar() {
  const jaarButton = $(".jaar-button");
  const jaarInvoer = $(".jaar-open");
  const form = $("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
  });

  jaarButton.addEventListener("click", function (e) {
    console.log(e);
    e.preventDefault();
    jaarButton.classList.toggle("hidden");
    jaarInvoer.classList.toggle("hidden");
    console.log(jaarButton);
  });
}

function $(element) {
  return document.querySelector(element);
}
