var a = [2, 1, 10];
b = a.sort();
console.log(b.push(3));
console.log(a);
console.log(b);

// for (var i = 0; i < a.length; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 500);
// }

for (let j = 0; j < a.length; j++) {
  setTimeout(function () {
    console.log(a[j]);
  }, 500);
}
