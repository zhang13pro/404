/**
 * 知识点
 * 词法作用域
 * 作用域链
 * 执行上下文（变量环境 | 词法环境）
 */
function bar() {
  console.log(myName);
}
function foo() {
  var myName = " 极客邦 ";
  bar();
}
var myName = " 极客时间 ";
foo();

function Far() {
  var feints = 0;
  this.getFeints = function () {
    return feints;
  };
  this.feint = function () {
    feints = feints + 1;
    console.log(feints);
  };
}
var far1 = new Far();
var far2 = new Far();
// 作用域查找
far1.feint();
console.log(far2.getFeints());
