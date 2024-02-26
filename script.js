// document.addEventListener("DOMContentLoaded", function () {
//   const firstDiv = document.querySelector(".first");
//   const digits = document.querySelectorAll(".digit");

//   let clickedSequence = '';

//   digits.forEach((digit) => {
//     digit.addEventListener("click", function () {
//       const number = this.dataset.number;

//       clickedSequence += number;

//       firstDiv.innerText = clickedSequence;
//     });
//   });
// });
const display = document.getElementById("display");

function toDisplay(number) {
  display.value += number;
};

function clearDisplay() {
  display.value = "";

};

function calculate() {
  display.value = eval(display.value);

}
