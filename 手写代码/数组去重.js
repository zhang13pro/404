function uniqueArr(arr) {
  return [...new Set(arr)];
}

const arr = uniqueArr([1, 2, 3, 3, 4, 1]);
console.log(arr);
