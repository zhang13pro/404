// [1,2,3,4,5] => [[1,2],[3,4],[5]]
const arr = [1, 2, 3, 4, 5];
const arrayTo2DArray = function (arr, n) {
  const array2D = [];
  for (let i = 0; i < arr.length; i += n) {
    array2D.push(arr.slice(i, i + n));
  }
  return array2D;
};

const arr2D = arrayTo2DArray(arr, 2);
console.log(arr2D);
