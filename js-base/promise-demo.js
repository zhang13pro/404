// 手写Promise加载图片
function loadImg(src) {
  const p = new Promise((resolve, reject) => {
    const img = document.createElement("img");

    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`图片加载失败${src}`));

    img.src = src;
  });

  return p;
}

const url = "https://img.mukewang.com/5a9fc8070001a82402060220-140-140.jpg";
loadImg(url)
  .then((img) => {
    console.log(img.width);
    console.log(img.height);
    return img;
  })
  .then((img) => {
    console.log(img.src);
  })
  .catch((err) => console.error(err));

const url1 = "https://img.mukewang.com/5a9fc8070001a82402060220-140-140.jpg";
const url2 = "https://img3.mukewang.com/5a9fc8070001a82402060220-100-100.jpg";

// loadImg(url1)
//   .then((img1) => {
//     console.log(img1.width);
//     return img1; // 普通对象
//   })
//   .then((img1) => {
//     console.log(img1.height);
//     return loadImg(url2); // promise 实例
//   })
//   .then((img2) => {
//     console.log(img2.width);
//     return img2;
//   })
//   .then((img2) => {
//     console.log(img2.height);
//   })
//   .catch((ex) => console.error(ex));
