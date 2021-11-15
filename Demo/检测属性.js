const object1 = {};
Object.prototype.name = "张三";
Object.defineProperty(object1, "property1", {
  value: 42,
  enumerable: false,
});

// console.log(object1.name);
console.log("property1" in object1);
console.log("name" in object1);
