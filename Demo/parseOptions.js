const ops = {
  a: 1,
};
Object.defineProperty(ops, "a", {
  get() {
    console.log("getter");
    // return ops[option];
  },
  set(newV) {
    console.log("setter");
    // ops[option] = newV;
  },
});
function getOptions(option) {}

// getOptions("MINMAX(CCAL, 0, CCAL)");
// getOptions(2);
ops.a;
