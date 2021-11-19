// 记住 实例与构造函数没有直接关系 instance.__proto__ === ConstructorFun.prototype
function Foo() {}
const foo1 = new Foo();
Foo.prototype = {
  hi() {
    console.log("hi");
  },
  //   constructor: Foo,
};
const foo = new Foo();

console.log(foo.constructor === Foo);
console.log(foo1.constructor === Foo);
// foo.hi();
