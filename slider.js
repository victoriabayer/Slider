const cards = [
  {
    img: "images/1.jpg",
    text: "Rostov-on-Don \n LCD admiral",
    text2: "81 m2",
    text3: "3.5 months",
    text4: "Upon request",
    title: "Rostov-on-Don, Admiral",
  },
  {
    img: "images/2.jpg",
    text: "Sochi Thieves",
    text2: "105 m2",
    text3: "4 months",
    text4: "Upon request",
    title: "Sochi Thieves",
  },
  {
    img: "images/3.jpg",
    text: "Rostov-on-Don \n Patriotic",
    text2: "93 m2",
    text3: "3 months",
    text4: "Upon request",
    title: "Rostov-on-Don Patriotic",
  },
];

let currentIndex = 0;

const img = document.querySelector(".image");
const t1 = document.querySelector(".text-1");
const t2 = document.querySelector(".text-2");
const t3 = document.querySelector(".text-3");
const t4 = document.querySelector(".text-4");

const setCards = () => {
  img.style.backgroundImage = `url(${cards[currentIndex].img})`;
  t1.innerText = cards[currentIndex].text;
  t2.innerText = cards[currentIndex].text2;
  t3.innerText = cards[currentIndex].text3;
  t4.innerText = cards[currentIndex].text4;
};

function next() {
  if (currentIndex === cards.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex += 1;
  }
  setCards();
  addStyle();
}

function prev() {
  if (currentIndex === 0) {
    currentIndex = cards.length - 1;
  } else {
    currentIndex -= 1;
  }
  setCards();
  addStyle();
}

const dotsParent = document.querySelector(".dots");
const title = document.querySelectorAll(".nav__name");

function initSliderElement() {
  cards.forEach((card, index) => {
    dotsParent.innerHTML += `<div class="dot ${
      index === 0 ? "active__dot" : ""
    }" data-index="${index}" data-title="${card.title}"></div>`;
  });
}

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("dot")) {
    currentIndex = Number(e.target.getAttribute("data-index"));
    setCards();
    addStyle();
  }
});

function addStyle() {
  document.querySelector(".dot.active__dot").classList.remove("active__dot");
  document
    .querySelector(`.dot[data-index="${currentIndex}"]`)
    .classList.add("active__dot");
  title.forEach((item) => item.classList.remove("active__name"));
  title[currentIndex].classList.add("active__name");
}

const navNames = document.querySelectorAll(".nav__name");

navNames.forEach((navName, index) => {
  navName.addEventListener("click", () => {
    currentIndex = index;
    setCards();
    addStyle();
    updateNavNames();
  });
});

function updateNavNames() {
  document
    .querySelector(".nav__name.active__name")
    .classList.remove("active__name");
  navNames[currentIndex].classList.add("active__name");
}

// Вызовите эту функцию после инициализации слайдера
window.onload = () => {
  setCards();
  initSliderElement();
  addStyle();
  updateNavNames();
};

const left = document.querySelector(".scrl-left");
const right = document.querySelector(".scrl-right");

left.addEventListener("click", prev);
right.addEventListener("click", next);

window.onload = () => {
  setCards();
  initSliderElement();
  addStyle();
};
