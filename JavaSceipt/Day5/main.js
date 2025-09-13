// var subsubTitle = document.getElementById("subTitle");

// // function toggleClass(){
// //     subsubTitle.classList.toggle("productOne");
// // }

// var flag = true;
// function replaceClass() {
//   if (flag) {
//     subsubTitle.classList.replace("productOne", "productTow");
//   } else {
//     subsubTitle.classList.replace("productTow", "productOne");
//   }
//   flag = !flag;
// }

var step = document.getElementById("steps");
var distance = document.getElementById("distance");
var calories = document.getElementById("calories");
var addBtn = document.getElementById("add");
var resetBtn = document.getElementById("reset");

function display() {
  document.getElementById("allSteps").innerHTML =
    +document.getElementById("allSteps").innerText + +step.value;
  document.getElementById("allDistance").innerHTML =
    +document.getElementById("allDistance").innerText + +distance.value;
  document.getElementById("allCalories").innerHTML =
    +document.getElementById("allCalories").innerText + +calories.value;
}
function reset() {
  document.getElementById("allSteps").innerHTML = " ";
  document.getElementById("allDistance").innerHTML = " ";
  document.getElementById("allCalories").innerHTML = " ";
}
addBtn.addEventListener("click", display);
resetBtn.addEventListener("click",reset)
