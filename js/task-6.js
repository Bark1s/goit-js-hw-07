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

let inputAmount = 0;
input.addEventListener("input", getValue);
function getValue(event) {
  inputAmount = event.currentTarget.value;
  console.log(inputAmount);
};

createButton.addEventListener("click", () => {

});

function createBoxes(amount) {

};