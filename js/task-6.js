function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector("#controls");
const input = document.querySelector("input");
const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

createButton.addEventListener("click", () => {
  input.focus();
  if (input.value >= 1 && input.value <= 100) {
    createBoxes(input.value);
    input.value = "";
  }
});

let newDiv;

function createBoxes(amount) {
  boxes.innerHTML = "";
  let boxsize = 30;
  for (let i = 1; i <= amount; i += 1) {
    newDiv = `<div style="width: ${boxsize}px; height: ${boxsize}px; background: ${getRandomHexColor()}"></div>`;
    boxes.insertAdjacentHTML("beforeend", newDiv);
    boxsize += 10;
  }
}

destroyButton.addEventListener("click", () => {
  input.value = "";
  boxes.innerHTML = "";
})