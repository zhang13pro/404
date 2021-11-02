// 通用的事件绑定函数;
function bindEvent(elem, type, fn) {
  elem.addEventListener(type, fn);
}
// function bindEvent(elem, type, selector, fn) {
//     if (fn == null) {
//         fn = selector
//         selector = null
//     }
//     elem.addEventListener(type, event => {
//         const target = event.target
//         if (selector) {
//             // 代理绑定
//             if (target.matches(selector)) {
//                 fn.call(target, event)
//             }
//         } else {
//             // 普通绑定
//             fn.call(target, event)
//         }
//     })
// }

// 普通绑定
const btn1 = document.getElementById("btn1");
bindEvent(btn1, "click", function (event) {
  console.log(event.target); // 获取触发的元素
  //   event.preventDefault(); // 阻止默认行为
  alert(this.innerHTML);
});

const div3 = document.getElementById("div3");
bindEvent(div3, "click", function (event) {
  const target = event.target.nodeName;
  //   event.preventDefault(); // 阻止默认行为
  if (target === "A") alert(this.innerHTML);
});

// 代理绑定
// const div3 = document.getElementById("div3");
// bindEvent(div3, "click", "a", function (event) {
//   event.preventDefault();
//   alert(this.innerHTML);
// });

const p1 = document.getElementById("p1");
const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const body = document.body;
bindEvent(p1, "click", (event) => {
  console.log(event.target);
  event.stopPropagation(); // 阻止冒泡
});
bindEvent(div1, "click", (event) => {
  console.log("冒泡到div1");
  console.log(event.target);
});
bindEvent(div2, "click", (event) => {
  console.log("冒泡到div2");
  console.log(event.target);
});
bindEvent(body, "click", (event) => {
  console.log("冒泡到body");
  console.log(event.target);
});
