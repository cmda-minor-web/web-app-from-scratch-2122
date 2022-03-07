const homeDisplay = $("#home");
const artDisplay = $("#art-list");
const infoDisplay = $("#information");
const linkButton = $("a");

a.addEventListener("submit", function (e) {
  e.preventDefault();
});

linkButton.addEventListener("click", function (e) {
  console.log(e);
  e.preventDefault();
  jaarButton.classList.toggle("hidden");
  jaarInvoer.classList.toggle("hidden");
  console.log(linkButton);
});
