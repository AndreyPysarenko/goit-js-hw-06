const body = document.querySelector("body");
const bodyBgColor = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");

changeColorBtn.addEventListener("click", selectColor);

function selectColor() {
  body.style.backgroundColor = getRandomHexColor();
  bodyBgColor.textContent = body.style.backgroundColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
