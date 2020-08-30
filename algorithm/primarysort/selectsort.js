var utils = require("../utils/randomArray")
function selectsort(arr) {
  let temp;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
}

let arr = utils.randomArray(100000);
let start = new Date().getTime();
selectsort(arr);
let end = new Date().getTime();


if (utils.isSorted(arr)) {
  //console.log(arr);
  console.log(end - start);
}


