const mainButton = document.querySelector(".buttons");
const screenInput = document.querySelector(".screen");
const btnEqual = document.querySelector(".btn-equal");
const btnClear = document.querySelector(".btn-clear");

mainButton.addEventListener("click", function (e) {
  e.preventDefault();
  const currentElement = e.target;

  if (currentElement.classList.contains("btn")) {
    const getAttribute = currentElement.getAttribute("data-num");
    screenInput.value += getAttribute;
  }
});

btnEqual.addEventListener("click", function (e) {
  e.preventDefault();
  screenInput.value = eval(screenInput.value);
});
btnClear.addEventListener("click", function (e) {
  e.preventDefault();
  screenInput.value = 0;
});
