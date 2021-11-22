function debounce(fn, delay) {
  let timer = null;
  return function () {
    let context = this,
      // TODO 不缓存不行吗
      args = arguments;

    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    timer = setTimeout(() => {
      fn.apply(context, args);
      console.log("args", args);
    }, delay);
  };
}
