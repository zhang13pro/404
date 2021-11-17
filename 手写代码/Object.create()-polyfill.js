/**
 * 你不知道的JS
 */
if (!Object.create) {
  Object.create = function (obj) {
    function F() {}
    F.prototype = obj;
    // new 1、创建新对象
    // 2、新对象的__proto__指向构造函数的prototype
    // 3、执行构造函数代码 this指向新对象
    // 4、判断返回值 引用类型?该引用:新对象
    return new F();
  };
}
