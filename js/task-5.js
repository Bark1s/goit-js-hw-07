function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const colorButton = document.querySelector(".change-color");
const accent = document.querySelector(".color");

colorButton.addEventListener("click", () => {
  body.style.backgroundColor = getRandomHexColor();
  accent.textContent = body.style.backgroundColor;
});