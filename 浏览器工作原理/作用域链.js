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
