// let btn = document.getElementById("btn");
// btn.addEventListener("click", function () {
//   Promise.resolve().then(() => {
//     console.log("Curry");
//   });
//   console.log("30");
// });
// btn.addEventListener("click", function () {
//   Promise.resolve().then(() => {
//     console.log("James");
//   });
//   console.log("23");
// });
// btn.click();

let link = document.getElementById("link");
let nextTick = new Promise(function (resolve) {
  link.addEventListener("click", resolve, { once: true });
});
nextTick.then((event) => {
  event.preventDefault();
  console.log("preventDefault");
});
