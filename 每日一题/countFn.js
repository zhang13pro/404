let countFn = function (fn) {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
};

let add = countFn();
add();
