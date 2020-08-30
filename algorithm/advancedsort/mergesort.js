var utils = require("../utils/randomArray");
function merge(arr, low, mid, high) {
  let i = low;
  let j = mid + 1;
  let k = 0;
  let arr2 = [];
  while (i <= mid && j <= high) {
    if (arr[i] <= arr[j]) {
      arr2[k] = arr[i];
      i++;
      k++;
    } else {
      arr2[k] = arr[j];
      j++;
      k++;
    }
  }

  while (i <= mid) {
    arr2[k] = arr[i];
    i++;
    k++;
  }

  while (j <= high) {
    arr2[k] = arr[j];
    j++;
    k++;
  }
  for (k = 0, i = low; i <= high; i++, k++) {
    arr[i] = arr2[k];
  }
}

/* function divide(arr, gap) {
  let i;
  for (i = 0; i + 2 * gap - 1 < arr.length; i = i + 2 * gap) {
    merge(arr, i, i + gap - 1, i + 2 * gap - 1);
  }
}
function sort(arr) {
  //起始的gap 是一 就是两个 相邻的元素进行 合并耶
  for (let gap = 1; gap <= Math.floor(arr.length / 2); gap = gap * 2) {
    divide(arr, gap);
  }
} */
/**
 * 
 * @param {*} arr 
 * @param {*} l  左边索引
 * @param {*} r  右边索引
 */
function mergesort(arr, l, r) {
  //不能等于,如果等于 mid 就等于 l mergesort(arr,l,mid) 就永远都停不下来,
  if (l >= r) {
    return;
  }
  let mid = Math.floor((l + r) / 2);
  mergesort(arr, l, mid);
  mergesort(arr, mid + 1, r);
  if (arr[mid] > arr[mid + 1]) {
    merge(arr, l, mid, r);
  }
}

function mergesort1(arr, length) {
  for (let gap = 1; gap <= length; gap *= 2) {
    for (let i = 0; i + gap <= length - 1; i += 2 * gap) {
        //针对元素 不够2^n的情况  
      merge(arr, i, i + gap - 1, Math.min(i + 2 * gap - 1, length - 1));
    }
  }
}
let arr = utils.randomArray(10000000);
let start = new Date().getTime();
mergesort(arr, 0, arr.length - 1);
let end = new Date().getTime();

if (utils.isSorted(arr)) {
  //console.log(arr);
  console.log(end - start);
}
//console.log(arr);
