var utils = require("../utils/randomArray");

function swap(arr, a, b) {
  let temp;
  temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
function partion(arr, l, r) {
 /*  let index = Math.floor(Math.random() * (r - l + 1) + l);
  //console.log(index);
  swap(index,l); */
  let v = arr[l];
  let lt = l;
  let gt = r + 1;

  for (let i = l + 1; i < gt; ) {
    if (arr[i] == v) {
      i++;
    } else if (arr[i] > v) {
      swap(arr, gt - 1, i);
      gt--;
    } else {
      swap(arr, lt + 1, i);
      lt++;
      i++;
    }
  }

  swap(arr, l, lt);
  lt--;
  return { lt: lt, gt: gt };
}

function quicksort(arr, l, r) {
  if (l >= r) {
    return;
  }
  let obj = partion(arr, l, r);
  quicksort(arr, l, obj.lt);
  quicksort(arr, obj.gt, r);
}
let count = 10000000;
let arr = utils.randomNearlyOrderArray(count);//NearlyOrder
//console.log(arr);
let start = new Date().getTime();
quicksort(arr, 0, arr.length - 1);
arr.sort();
let end = new Date().getTime();

if (utils.isSorted(arr)) {
  console.log("快排时间" + (end - start));
}
//console.log(arr);
