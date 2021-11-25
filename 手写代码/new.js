function objFactory() {
  // 1 创建新对象
  let newObj = null;
  let constructor = Array.prototype.shift.call(arguments);
  let res = null;
  let flag;

  if (typeof constructor !== "function")
    return new Error("Constructor not a Function");

  // 2 链接原型
  newObj = Object.create(constructor.prototype);
  // 3 指定this 执行构造
  res = constructor.apply(newObj, arguments);
  // 4 判断返回值
  flag = res && (typeof res === "object" || res === "function");

  return flag ? res : newObj;
}

console.log(
  objFactory(function (name) {
    this.name = name;
  }, "13")
);
