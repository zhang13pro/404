function color() {
  console.log("green");
  setTimeout(() => {
    console.log("yellow");
    setTimeout(() => {
      console.log("red");
      setTimeout(color, 2000);
    }, 1000);
  }, 3000);
}
// color();
// promise
