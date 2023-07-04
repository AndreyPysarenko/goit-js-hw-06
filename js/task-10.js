const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const divBoxes = document.querySelector("#boxes");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes() {
  const addNewBoxes = [];
  const amount = input.value;

  for (let i = 0; i < amount; i += 1) {
    let baseSizeEl = 30;
    const sizeEl = `${baseSizeEl + i * 10}`;

    const createBoxes = `<div style="width: ${sizeEl}px; height: ${sizeEl}px; background-color: ${getRandomHexColor()}; margin: 5px"></div>`;
    addNewBoxes.push(createBoxes);
  }
  divBoxes.insertAdjacentHTML("beforeend", addNewBoxes.join(""));
}

function destroyBoxes() {
  divBoxes.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
