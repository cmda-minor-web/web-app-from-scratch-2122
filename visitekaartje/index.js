// Buttons
const infoBtn = document.querySelector(".info-button");
const hobbyBtn = document.querySelector(".hobby-button");
const achBtn = document.querySelector(".achievement-button");

//information of textblocks
const info = document.querySelector(".information");
const hobby = document.querySelector(".hobbys");
const achievement = document.querySelector(".achievements");
const textBlock = document.querySelector(".textblock");
const hobbyList = document.querySelector(".hobby-list");
const achList = document.querySelector(".achievement-list");
const profile = document.querySelector(".profile");

infoBtn.addEventListener("click", function () {
  textBlock.classList.toggle("hidden");
  info.classList.toggle("hidden");
  if (document.querySelector("#profile").src.indexOf("img/pf3.jpg") !== -1) {
    document.getElementById("profile").src = "img/pf1.jpg";
  } else {
    document.getElementById("profile").src = "img/pf3.jpg";
  }
});

hobbyBtn.addEventListener("click", function () {
  textBlock.classList.toggle("hidden");
  hobby.classList.toggle("hidden");
  hobbyList.classList.toggle("hidden");
  if (document.querySelector("#profile").src.indexOf("img/pf2.jpg") !== -1) {
    document.getElementById("profile").src = "img/pf1.jpg";
  } else {
    document.getElementById("profile").src = "img/pf2.jpg";
  }
});
achBtn.addEventListener("click", function () {
  textBlock.classList.toggle("hidden");
  achievement.classList.toggle("hidden");
  achList.classList.toggle("hidden");
  if (document.querySelector("#profile").src.indexOf("img/pf4.jpg") !== -1) {
    document.getElementById("profile").src = "img/pf1.jpg";
  } else {
    document.getElementById("profile").src = "img/pf4.jpg";
  }
});
