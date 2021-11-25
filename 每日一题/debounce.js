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

// Javascript定时器中的this指向
var name = "my name is window";
var obj = {
  name: "my name is obj",
  fn: function () {
    var timer = null;
    clearTimeout(timer);
    timer = setTimeout(function () {
      console.log(this.name); // log 'my name is window' in Browser
    }, 1000);
  },
};
obj.fn();
