let myInstanceof = function (ins, obj) {
  const proto = ins.__proto__;
  const prototype = obj.prototype;

  while (true) {
    if (!proto) return false;
    if (proto === prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
};

let a = [];
console.log(a instanceof Array);
console.log(myInstanceof(a, Array));
