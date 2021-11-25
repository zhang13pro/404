var count = 1;
var container = document.getElementById("container");

function getUserAction() {
  container.innerHTML = count++;
}

container.onmousemove = debounce(getUserAction, 1000);

function debounce(fn, delay) {
  let timer = null;
  return function () {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, delay);
  };
}
