// 1. 闭包
function countFn(fn) {
  let count = 0;
  return function () {
    count++;
    fn.call(this, ...arguments);
    console.log(count);
  };
}
function fn(test) {
  console.log(test);
}

let test = countFn(fn);
test("super-cool");
test("spider-man");

// 2. 原型
Function.prototype.countFn1 = function () {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
};
let test1 = fn.countFn1();

test1();
test1();

// 3.Proxy apply
function countFn2(fn) {
  var count = 0;
  let handler = {
    // count: 0,
    apply: function (target, that, args) {
      // console.log(target, that, args);
      // console.log(++this.count);
      console.log(++count);
      target.apply(that, args);
    },
  };
  return new Proxy(fn, handler);
}
