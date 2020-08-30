var utils = require("../utils/randomArray");
function partion(arr, l, r) {
  let v = arr[l];
  let j = l;
  let temp;
  for (let i = l + 1; i <= r; i++) {
    if (arr[i] < v) {
      temp = arr[i];
      arr[i] = arr[j + 1];
      arr[j + 1] = temp;
      j++;
    }
  }
  temp = arr[j];
  arr[j] = arr[l];
  arr[l] = temp;

  return j;
}

function quicksort(arr, l, r) {
  if (l >= r) {
    return;
  }
  let p = partion(arr, l, r);
  quicksort(arr, l, p - 1);
  quicksort(arr, p + 1, r);
}
let count = 10000000;
let arr = utils.randomArray(count);
//console.log(arr);
let start = new Date().getTime();
quicksort(arr, 0, arr.length - 1);
let end = new Date().getTime();

if (utils.isSorted(arr)) {
  //console.log(arr);
  console.log("快排时间" + (end - start));
}
