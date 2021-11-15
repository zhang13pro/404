async function async1() {
  console.log("1");
  await async2();
  console.log("2");
}
async function async2() {
  console.log("3");
}
console.log("4");
setTimeout(function () {
  console.log("5");
  Promise.resolve().then(function () {
    console.log("6");
  });
}, 0);
setTimeout(function () {
  console.log("7");
  Promise.resolve().then(function () {
    console.log("8");
  });
}, 0);
async1();
new Promise(function (resolve) {
  console.log("9");
  resolve();
}).then(function () {
  console.log("10");
});
console.log("11");

// 掉坑一次

var home = {
  address: "tieling",
};
var qiezi = Object.create(home);
delete qiezi.address; // 静默失败 delete can't the property of Prototype
console.log(qiezi.address);

// 掉坑二次
// 知识点 异步 原型链

var x = 1;
if (function f() {}) {
  x += typeof f;
}
console.log(x);
// wtf?
// 好的 考察作用域and字符串拼接
// typeof f 拿不到f undefined

function qiezi(n, o) {
  console.log(o); // ？
  return {
    qiezi: function (m) {
      return qiezi(m, n);
    },
  };
}
const a = qiezi(0);
a.qiezi(1);
a.qiezi(2);
a.qiezi(3);
const b = qiezi(0).qiezi(1).qiezi(2).qiezi(3);
const c = qiezi(0).qiezi(1);
c.qiezi(2);
c.qiezi(3);
