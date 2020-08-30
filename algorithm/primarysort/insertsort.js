var utils = require("../utils/randomArray");
function insertsort(arr) {
  let temp;
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
      temp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = temp;
    }
  }
}
function insertsort1(arr) {
  for (let i = 1; i < arr.length; i++) {
    let cur = arr[i];
    let j;
    for (j = i; j > 0 && cur < arr[j - 1]; j--) {
      arr[j] = arr[j - 1];
    }
    arr[j] = cur;
  }
}

let arr = utils.randomArray(100000);
let start = new Date().getTime();
insertsort1(arr);
let end = new Date().getTime();

if (utils.isSorted(arr)) {
  //console.log(arr);
  console.log(end - start);
}
