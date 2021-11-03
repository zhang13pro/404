//考察实现 Array.prototype.flat()

// 递归
function flatter(arr) {
  if (!arr.length) return;
  const res = arr.reduce(
    (pre, cur) =>
      Array.isArray(cur) ? [...pre, ...flatter(cur)] : [...pre, cur],
    []
  );

  //   注意细节
  //   const err = arr.reduce((pre, cur) => {
  //     debugger;
  //     // return
  //     Array.isArray(cur) ? [...pre, ...flatter(cur)] : [...pre, cur];
  //   }, []);

  return res;
}

console.log(flatter([1, 2, [1, [2, 3], [4, 5, [6]]]]));
