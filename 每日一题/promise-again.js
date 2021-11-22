new Promise((resolve, reject) => {
  console.log("外部promise"); // 1
  resolve();
})
  .then(() => {
    console.log("外部第一个then"); // 2
    return new Promise((resolve, reject) => {
      console.log("内部promise"); // 3
      resolve();
    })
      .then(() => {
        console.log("内部第一个then"); // 5
      })
      .then(() => {
        console.log("内部第二个then"); // 5
      });
  })
  .then(() => {
    console.log("外部第二个then"); // 6
  });

new Promise((resolve, reject) => {
  console.log("外部promise"); // 1
  resolve();
})
  .then(() => {
    console.log("外部第一个then"); // 2
    new Promise((resolve, reject) => {
      console.log("内部promise"); // 3
      resolve();
    })
      .then(() => {
        console.log("内部第一个then"); // 4
      })
      .then(() => {
        console.log("内部第二个then"); // 6
      });
  })
  .then(() => {
    console.log("外部第二个then"); // 5
  });
