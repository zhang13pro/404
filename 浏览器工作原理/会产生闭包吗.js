let bar = {
  myName: "time.geekbang.com",
  printName: function () {
    console.log(myName);
  },
};
function foo() {
  let myName = " 极客时间 ";
  return bar.printName;
}
let myName = " 极客邦 ";
let _printName = foo();
_printName();
bar.printName();

function far() {
  let a = 1;
  function inner() {
    debugger;
    console.log(a);
    let b = 2;
  }
  inner();
}
far();
