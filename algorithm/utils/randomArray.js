function randomArray(count) {
  let arr = [];
  for (let i = 0; i < count; i++) {
    arr[i] = Math.floor(Math.random() * count + 1);
  }
  return arr;
}
exports.randomArray = randomArray;

function randomNearlyOrderArray(count) {
  let arr = [];
  for (let i = 0; i < count; i++) {
    arr[i] = Math.floor(Math.random() * 50 + 1);
  }
  return arr;
}
exports.randomNearlyOrderArray = randomNearlyOrderArray;

function isSorted(arr) {
  for (let i = 1; i + 1 < arr.length - 1; i++) {
    if (
      !(arr[i - 1] <= arr[i] <= arr[i + 1]) &&
      !(arr[i - 1] >= arr[i] >= arr[i + 1])
    ) {
      return false;
    }
  }
  return true;
}
exports.isSorted = isSorted;
