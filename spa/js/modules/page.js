// import { volgende } from "./modules/getdata.js";
// import { vorige } from "./modules/getdata.js";

export function page() {
  const pagePlus = $(".right");
  const pageMin = $(".left");
  const pageNumber = $(".page-number");

  pageMin.addEventListener("click", function (e) {
    console.log(e);
    //vorige tien tonen
    //run functie met betreffende aantal
    //aantal = -10???
    // vorige();
  });

  pagePlus.addEventListener("click", function (e) {
    console.log(e);
    // volgende();
  });
}

function $(element) {
  return document.querySelector(element);
}
