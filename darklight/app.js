// const toggle = document.getElementById("demo");
// // const text = document.getElementById("h1");
// const body = document.querySelector("body");
// toggle.addEventListener("click", function () {
//   this.classList.toggle("fa-moon");
//   if (this.classList.toggle("fa-sun")) {
//     body.style.background = "white";
//     body.style.color = "black";
//     body.style.transition = "2s";
//   } else {
//     body.style.background = "black";
//     body.style.color = "white";
//     body.style.transition = "2s";
//     body.style.boxShadow = "0 0 20px white";
//     body.style.border = "none";
//   }
// });
const toggle = document.getElementById("demo");
const body = document.querySelector("body");
toggle.addEventListener("click", function () {
  this.classList.toggle("fa-moon");
  if (this.classList.toggle("fa-sun")) {
    body.style.background = "white";
    body.style.color = "black";
    body.style.transition = "2s";
  } else {
    body.style.background = "black";
    body.style.color = "white";
    body.style.transition = "1s";
  }
});
